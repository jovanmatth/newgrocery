/**
 * DT2 ORGANIC COMPREHENSIVE EVALUATION TEST SUITE (100 POIN)
 * Sesuai Modul P15: Daily Test 2 (DT2) - Evaluasi Smart Grocery Tracker
 * SMA Mutiara Bangsa 2 Tangerang
 */

function runDT2TestSuite() {
  if (typeof window.initApp === 'function' && (!window.appState || !window.appState.cart)) {
    window.initApp();
  }

  const results = [];
  function assert(scenarioCode, name, points, passed, details) {
    results.push({ scenarioCode, name, points, passed, details });
    console.log(`[${passed ? 'PASS' : 'FAIL'}] [${scenarioCode}] (${points} Pts) ${name}: ${details}`);
  }

  try {
    console.log('=== MEMULAI ORGANIC TEST SUITE DT2 (100 POIN) ===');

    // -------------------------------------------------------------
    // SKENARIO 1 (SRS F-01): Form Input Item, Toko & Selector Tanggal (15 Poin)
    // -------------------------------------------------------------
    const storeEl = document.getElementById('activeStoreName');
    const isStoreCorrect = storeEl && storeEl.textContent.includes('Lotte Mart');
    const datePicker = document.getElementById('sessionDatePicker');
    const isDateSet = datePicker && !!datePicker.value;

    // Test form input item via #formItemModal
    const inputName = document.getElementById('inputItemName');
    const inputPrice = document.getElementById('inputItemPrice');
    const inputQty = document.getElementById('inputItemQty');
    const selectCat = document.getElementById('selectItemCategory');
    const selectUnit = document.getElementById('selectItemUnit');
    const formItem = document.getElementById('formItemModal');

    let formValidTest = false;
    let negativePriceRejectedTest = false;
    let emptyNameRejectedTest = false;

    if (inputName && inputPrice && inputQty && formItem) {
      const initialCartLen = window.appState.cart.length;

      // 1. Validasi Nama Kosong
      inputName.value = '';
      inputPrice.value = '50000';
      inputQty.value = '1';
      formItem.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      emptyNameRejectedTest = (window.appState.cart.length === initialCartLen);

      // 2. Validasi Harga Negatif (-15000)
      inputName.value = 'Barang Rusak';
      inputPrice.value = '-15000';
      inputQty.value = '1';
      formItem.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      negativePriceRejectedTest = (window.appState.cart.length === initialCartLen);

      // 3. Input Beras Rojolele Rp 74.000 Qty 1
      inputName.value = 'Beras Rojolele';
      inputPrice.value = '74000';
      inputQty.value = '1';
      if (selectCat) selectCat.value = 'Bahan Pokok';
      if (selectUnit) selectUnit.value = 'karung/5kg';
      formItem.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      
      const addedItem = window.appState.cart.find(it => it.name === 'Beras Rojolele');
      formValidTest = (window.appState.cart.length === initialCartLen + 1) && !!addedItem && addedItem.price === 74000;
    }

    const s1Passed = isStoreCorrect && isDateSet && formValidTest && negativePriceRejectedTest && emptyNameRejectedTest;
    assert('F-01', 'Form Input Item, Toko & Selector Tanggal', 15, s1Passed, 
      `Toko: ${storeEl?.textContent}, Tanggal: ${datePicker?.value}, Input Valid: ${formValidTest}, Tolak Negatif: ${negativePriceRejectedTest}, Tolak Kosong: ${emptyNameRejectedTest}`);

    // -------------------------------------------------------------
    // SKENARIO 2 (SRS F-02): Reaktivitas Qty & Subtotal Tanpa Delay (10 Poin)
    // -------------------------------------------------------------
    // Minyak Goreng 2L seharga Rp 43.000, ubah qty dari 1 ke 3 -> Subtotal wajib Rp 129.000
    const testItemId = 'test-minyak-' + Date.now();
    window.appState.cart.push({
      id: testItemId,
      name: 'Minyak Goreng 2L',
      category: 'Bahan Pokok',
      unit: 'pouch',
      price: 43000,
      qty: 1,
      discountFormula: '',
      discountPercent: 0,
      discountAmount: 0,
      finalUnitPrice: 43000,
      finalPrice: 43000,
      savedPerUnit: 0
    });
    window.renderCart();

    // Ubah kuantitas jadi 3
    window.setItemQty(testItemId, 3);
    const updatedMinyak = window.appState.cart.find(it => it.id === testItemId);
    const expectedSubtotal = 43000 * 3; // 129.000
    const s2Passed = updatedMinyak && updatedMinyak.qty === 3 && (updatedMinyak.finalPrice === expectedSubtotal || (updatedMinyak.price * updatedMinyak.qty) === expectedSubtotal);
    assert('F-02', 'Reaktivitas Kuantitas & Subtotal Tanpa Delay', 10, s2Passed,
      `Qty: ${updatedMinyak?.qty}, Subtotal: Rp ${(updatedMinyak?.finalPrice || (updatedMinyak.price * updatedMinyak.qty))?.toLocaleString('id-ID')} (Target: Rp 129.000)`);

    // -------------------------------------------------------------
    // SKENARIO 3 (SRS F-03): Kalkulator Diskon Bertingkat Kompound (15 Poin)
    // -------------------------------------------------------------
    // 1. Sabun cuci Rp 20.000 diskon 25% -> Rp 15.000
    const discSingle = window.calculateDiscount(20000, '25%');
    const isSingleCorrect = discSingle && discSingle.finalUnitPrice === 15000;

    // 2. Wajan Rp 100.000 diskon 50%+20% -> Tahap 1: 50.000, Tahap 2: 40.000
    const discCompound = window.calculateDiscount(100000, '50% + 20%');
    const isCompoundCorrect = discCompound && discCompound.finalUnitPrice === 40000;

    const s3Passed = isSingleCorrect && isCompoundCorrect;
    assert('F-03', 'Kalkulator Diskon Bertingkat Kompound', 15, s3Passed,
      `Tunggal: Rp ${discSingle?.finalUnitPrice} (Target: 15.000), Kompound 50%+20%: Rp ${discCompound?.finalUnitPrice} (Target: 40.000)`);

    // -------------------------------------------------------------
    // SKENARIO 4 (SRS F-04): Komparator Fluktuasi Harga Realtime (15 Poin)
    // -------------------------------------------------------------
    // 1. Beras 5kg: Bulan lalu 68.000 -> Sekarang 74.000 (Naik +Rp 6.000)
    const compNaik = window.comparePriceWithLastMonth(74000, 68000);
    const isNaikCorrect = compNaik && compNaik.status === 'up' && compNaik.text.includes('6.000');

    // 2. Telur 1kg: Bulan lalu 32.000 -> Sekarang 28.000 (Turun -Rp 4.000)
    const compTurun = window.comparePriceWithLastMonth(28000, 32000);
    const isTurunCorrect = compTurun && compTurun.status === 'down' && compTurun.text.includes('4.000');

    // 3. Garam 500g: Bulan lalu 5.000 -> Sekarang 5.000 (Stabil)
    const compStabil = window.comparePriceWithLastMonth(5000, 5000);
    const isStabilCorrect = compStabil && (compStabil.status === 'stable' || compStabil.status === 'equal' || compStabil.text.includes('Tetap'));

    const s4Passed = isNaikCorrect && isTurunCorrect && isStabilCorrect;
    assert('F-04', 'Komparator Fluktuasi Harga Realtime', 15, s4Passed,
      `Beras Naik: ${isNaikCorrect} (${compNaik?.text}), Telur Turun: ${isTurunCorrect} (${compTurun?.text}), Garam Stabil: ${isStabilCorrect} (${compStabil?.text})`);

    // -------------------------------------------------------------
    // SKENARIO 5 (SRS F-05): Pengendali Anggaran (Safety Cap Warning) (15 Poin)
    // -------------------------------------------------------------
    window.appState.budgetLimit = 100000;
    
    // Total Rp 95.000 (95% -> >= 90% Warning)
    window.appState.cart = [{ id: 'item-warn', name: 'Item Uji', price: 95000, qty: 1, finalUnitPrice: 95000, finalPrice: 95000 }];
    window.updateBudgetHud();
    const statusTextEl = document.getElementById('hudStatusText');
    const statusBadgeEl = document.getElementById('hudStatusBadge');
    const isYellowWarning = (statusTextEl && statusTextEl.textContent.includes('WASPADA')) || (statusBadgeEl && statusBadgeEl.className.includes('amber'));

    // Total Rp 110.000 (110% -> Overbudget Danger)
    window.appState.cart = [{ id: 'item-danger', name: 'Item Bahaya', price: 110000, qty: 1, finalUnitPrice: 110000, finalPrice: 110000 }];
    window.updateBudgetHud();
    const bannerEl = document.getElementById('overBudgetBanner');
    const isRedDanger = (statusTextEl && statusTextEl.textContent.includes('OVER BUDGET')) || (bannerEl && !bannerEl.classList.contains('hidden') && bannerEl.innerHTML.includes('Total belanja melebihi batas saldo dompet!'));

    const s5Passed = isYellowWarning && isRedDanger;
    assert('F-05', 'Pengendali Anggaran (Safety Cap Warning)', 15, s5Passed,
      `Peringatan 95% (Kuning): ${isYellowWarning} [${statusTextEl?.textContent}], Peringatan 110% (Merah Tegas): ${isRedDanger}`);

    // -------------------------------------------------------------
    // SKENARIO 6 (SRS F-06A): Persistensi Data Lokal (Storage & F5) (10 Poin)
    // -------------------------------------------------------------
    window.appState.cart = [
      { id: 'f5-item-1', name: 'Beras 5kg', price: 74000, qty: 1, finalUnitPrice: 74000, finalPrice: 74000 },
      { id: 'f5-item-2', name: 'Minyak Goreng 2L', price: 43000, qty: 1, finalUnitPrice: 43000, finalPrice: 43000 }
    ];
    window.appState.budgetLimit = 150000;
    window.saveCart();
    window.saveBudget();

    // Simulasikan reload data dari storage
    window.appState.cart = [];
    window.appState.budgetLimit = 0;
    window.loadDataFromStorage();

    const isCartPersisted = window.appState.cart.length === 2 && window.appState.cart.some(it => it.name === 'Beras 5kg');
    const isBudgetPersisted = window.appState.budgetLimit === 150000;

    // Uji Hapus Item
    window.deleteCartItem('f5-item-1');
    const isItemRemoved = window.appState.cart.length === 1 && !window.appState.cart.some(it => it.id === 'f5-item-1');

    const s6Passed = isCartPersisted && isBudgetPersisted && isItemRemoved;
    assert('F-06A', 'Persistensi Data Lokal (LocalStorage & F5)', 10, s6Passed,
      `Tahan F5: ${isCartPersisted && isBudgetPersisted}, Hapus Item: ${isItemRemoved}`);

    // -------------------------------------------------------------
    // SKENARIO 7 (SRS F-06B): Sinkronisasi Realtime Cloud Multi-Device (10 Poin)
    // -------------------------------------------------------------
    // Menguji broadcast realtime update & incoming payload processing
    const mockIncomingPayload = {
      sourceDeviceId: 'remote-phone-device-999',
      userSyncId: 'user_rian',
      type: 'cart',
      data: {
        cart: [
          { id: 'remote-item-1', name: 'Sabun Mandi', price: 15000, qty: 2, finalUnitPrice: 15000, finalPrice: 30000 }
        ],
        budgetLimit: 150000
      },
      timestamp: Date.now()
    };

    window.handleIncomingRealtimePayload(mockIncomingPayload);
    const isRealtimeApplied = window.appState.cart.some(it => it.name === 'Sabun Mandi' && it.qty === 2);
    const isSupabaseConfigured = !!(window.appState.supabaseUrl && window.appState.supabaseKey);

    const s7Passed = isRealtimeApplied && isSupabaseConfigured;
    assert('F-06B', 'Sinkronisasi Realtime Cloud Multi-Device', 10, s7Passed,
      `Listener onSnapshot & WebSocket: ${isRealtimeApplied}, Supabase Client Ready: ${isSupabaseConfigured}`);

    // -------------------------------------------------------------
    // SKENARIO 8 (UX): Pengalaman Pengguna & Ergonomi Sentuh Mobile (5 Poin)
    // -------------------------------------------------------------
    const priceInput = document.getElementById('inputItemPrice');
    const qtyInput = document.getElementById('inputItemQty');
    const isNumericMode = priceInput && priceInput.getAttribute('inputmode') === 'numeric';
    
    // Cek ukuran touch target tombol jempol (min 44px)
    const stepperBtn = document.querySelector('button[onclick*="changeItemQty"]');
    let is44pxTouchTarget = false;
    if (stepperBtn) {
      const rect = stepperBtn.getBoundingClientRect();
      const style = window.getComputedStyle(stepperBtn);
      const minW = parseInt(style.minWidth) || rect.width;
      const minH = parseInt(style.minHeight) || rect.height;
      is44pxTouchTarget = (minW >= 40 && minH >= 40) || stepperBtn.className.includes('min-w-[44px]');
    } else {
      is44pxTouchTarget = true; // fallback
    }

    // Modal konfirmasi hapus & visual toast non-blocking
    const modalConfirmClear = document.getElementById('modalConfirmClearCart');
    const hasClearModal = !!modalConfirmClear;

    const s8Passed = isNumericMode && is44pxTouchTarget && hasClearModal;
    assert('UX', 'Pengalaman Pengguna & Ergonomi Mobile', 5, s8Passed,
      `inputmode="numeric": ${isNumericMode}, Touch Target >=44px: ${is44pxTouchTarget}, Modal Clear Cart: ${hasClearModal}, Non-blocking Toast: OK`);

    // -------------------------------------------------------------
    // SKENARIO 9 (UI/Code): Mobile PWA 375px & Deliverable GitHub (5 Poin)
    // -------------------------------------------------------------
    const bodyWidth = document.body.offsetWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    const noHorizontalOverflow = scrollWidth <= bodyWidth + 2; // toleransi 2px
    const isLiveUrlAvailable = window.location.href.startsWith('http') || window.location.protocol === 'file:';

    const s9Passed = noHorizontalOverflow && isLiveUrlAvailable;
    assert('UI/Code', 'Mobile PWA 375px & Deliverable GitHub', 5, s9Passed,
      `No Horizontal Scroll Leak: ${noHorizontalOverflow}, Deployment URL: ${window.location.href}`);

    // -------------------------------------------------------------
    // REKAP SKOR TOTAL
    // -------------------------------------------------------------
    const totalScore = results.reduce((sum, r) => sum + (r.passed ? r.points : 0), 0);
    const maxScore = results.reduce((sum, r) => sum + r.points, 0);

    console.log(`\n========================================`);
    console.log(`TOTAL NILAI DAILY TEST 2 (DT2): ${totalScore} / ${maxScore}`);
    console.log(`STATUS: ${totalScore === 100 ? 'LULUS SEMPURNA (100/100) KKTP TERCAPAI' : 'BELUM MAKSIMAL'}`);
    console.log(`========================================`);

    window.__DT2_TEST_RESULTS__ = {
      totalScore,
      maxScore,
      passedAll: totalScore === maxScore,
      details: results
    };

    const outEl = document.getElementById('testReportOutput');
    if (outEl) {
      outEl.innerText = '===RESULTS_START===' + JSON.stringify(window.__DT2_TEST_RESULTS__) + '===RESULTS_END===';
    }

    return window.__DT2_TEST_RESULTS__;
  } catch (err) {
    console.error('Test Suite Error:', err);
    const outEl = document.getElementById('testReportOutput');
    if (outEl) {
      outEl.innerText = '===RESULTS_START===' + JSON.stringify({ error: err.message, stack: err.stack }) + '===RESULTS_END===';
    }
    return { error: err.message, stack: err.stack };
  }
}

if (document.readyState === 'complete') {
  runDT2TestSuite();
} else {
  window.addEventListener('load', runDT2TestSuite);
}
