// Updated Newbam Dashboard Application JavaScript - Fixed Tab Navigation

class NewbamDashboard {
    constructor() {
        this.data = this.getUpdatedData();
        this.charts = {};
        this.init();
    }

    // Initialize the application
    init() {
        this.setupEventListeners();
        this.renderDashboard();
        this.updateCurrentDate();
        
        // Initialize with overview tab active
        this.switchTab('overview');
    }

    // Updated data with consolidated inventory and detailed timeline
    getUpdatedData() {
        return {
            "last_updated": "2025-08-15",
            "financial": {
                "bank_balance": 55450000,
                "amazon_pending": 9900,
                "amazon_current": 5984,
                "expected_total_revenue": 41576,
                "total_expected_final": 932000000
            },
            "inventory_fba_updated": [
                {"sku": "Cashew001", "name": "Lightly Salted", "quantity": 2428, "price": 18.59, "total_value": 45123.52, "added_stock": 48},
                {"sku": "Cashew008", "name": "Honey Roasted", "quantity": 386, "price": 18.98, "total_value": 7326.28, "added_stock": 0},
                {"sku": "Cashew006", "name": "Mix Variety", "quantity": 918, "price": 18.98, "total_value": 17423.64, "added_stock": 0},
                {"sku": "Cashew005", "name": "Sea Salt Caramel", "quantity": 146, "price": 18.98, "total_value": 2771.08, "added_stock": 0},
                {"sku": "Cashew004", "name": "Spicy Tom Yum", "quantity": 322, "price": 18.98, "total_value": 6113.56, "added_stock": 312}
            ],
            "business_metrics": {
                "period": "90 ngày gần nhất",
                "total_sales": 76611.70,
                "ad_spend": 10834.56,
                "ad_sales": 29802.30,
                "orders": 1326,
                "tacos": 14.14,
                "acos": 36.35,
                "tacos_change": -25.89,
                "acos_change": -24.88
            },
            "detailed_timeline": [
                {
                    "period": "Tuần 3/8 (15-21/8)",
                    "tasks": [
                        {"date": "15/8", "task": "Nhận thanh toán Amazon", "amount": "9,900 USD", "responsible": "Thư", "status": "scheduled"},
                        {"date": "16-18/8", "task": "Thuận báo cáo NVL tồn kho chi tiết", "responsible": "Thuận", "status": "pending"},
                        {"date": "19-20/8", "task": "Đông gửi 15 thùng hàng bổ sung lên FBA", "responsible": "Đông", "status": "pending"},
                        {"date": "21/8", "task": "Chấm dứt hợp đồng chị Thanh", "responsible": "Đông", "status": "pending"}
                    ]
                },
                {
                    "period": "Tuần 4/8 (22-31/8)", 
                    "tasks": [
                        {"date": "22-25/8", "task": "Phân loại đóng thùng NVL", "responsible": "Thuận", "status": "scheduled"},
                        {"date": "26-28/8", "task": "Tìm đầu mối thanh lý máy đóng gói", "responsible": "Thuận", "status": "scheduled"},
                        {"date": "30/8", "task": "Nhận thanh toán Amazon kỳ 2", "amount": "5,500 USD", "responsible": "Thư", "status": "scheduled"},
                        {"date": "30/8", "task": "Báo cáo tài chính định kỳ", "responsible": "Thư", "status": "scheduled"}
                    ]
                }
            ],
            "cashflow_timeline": [
                {"date": "15/8/2025", "source": "Hiện tại", "amount_vnd": 55450000, "amount_usd": 15884, "total_vnd": 55450000},
                {"date": "30/8/2025", "source": "Amazon + Lương", "amount_usd": 9900, "expense_vnd": -5000000, "total_vnd": 302000000},
                {"date": "15/9/2025", "source": "Amazon + Lương", "amount_usd": 5200, "expense_vnd": -5000000, "total_vnd": 427000000},
                {"date": "30/9/2025", "source": "Amazon", "amount_usd": 4800, "total_vnd": 547000000},
                {"date": "15/10/2025", "source": "Amazon + Lương", "amount_usd": 4500, "expense_vnd": -5000000, "total_vnd": 657000000},
                {"date": "30/10/2025", "source": "Amazon", "amount_usd": 4200, "total_vnd": 762000000},
                {"date": "15/11/2025", "source": "Amazon + Lương", "amount_usd": 3800, "expense_vnd": -5000000, "total_vnd": 857000000},
                {"date": "30/11/2025", "source": "Amazon - CHỐT CUỐI", "amount_usd": 3000, "total_vnd": 932000000}
            ],
            "progress_tracking": {
                "overall_liquidation": 15,
                "inventory_sold": 8,
                "revenue_collected": 12,
                "tasks_completed": 25
            }
        };
    }

    // Setup event listeners
    setupEventListeners() {
        // Tab navigation - FIXED
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const tabId = e.target.getAttribute('data-tab');
                this.switchTab(tabId);
            });
        });

        // Refresh data button
        const refreshBtn = document.getElementById('refresh-data');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.refreshData();
            });
        }

        // Financial update
        const updateFinancialBtn = document.getElementById('update-financial');
        if (updateFinancialBtn) {
            updateFinancialBtn.addEventListener('click', () => {
                this.updateFinancial();
            });
        }

        // Week selection for progress update
        const weekSelect = document.getElementById('week-select');
        if (weekSelect) {
            weekSelect.addEventListener('change', (e) => {
                this.loadWeekTasks(e.target.value);
            });
        }

        // Progress update
        const updateProgressBtn = document.getElementById('update-progress');
        if (updateProgressBtn) {
            updateProgressBtn.addEventListener('click', () => {
                this.updateProgress();
            });
        }

        // Report generation
        const generateReportBtn = document.getElementById('generate-report');
        if (generateReportBtn) {
            generateReportBtn.addEventListener('click', () => {
                this.generateReport();
            });
        }

        const copyReportBtn = document.getElementById('copy-report');
        if (copyReportBtn) {
            copyReportBtn.addEventListener('click', () => {
                this.copyReport();
            });
        }

        const printReportBtn = document.getElementById('print-report');
        if (printReportBtn) {
            printReportBtn.addEventListener('click', () => {
                this.printReport();
            });
        }

        const emailReportBtn = document.getElementById('email-report');
        if (emailReportBtn) {
            emailReportBtn.addEventListener('click', () => {
                this.emailReport();
            });
        }
    }

    // Switch between tabs - FIXED IMPLEMENTATION
    switchTab(tabId) {
        console.log('Switching to tab:', tabId);
        
        // Update tab buttons
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('nav-tab--active');
        });
        
        const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeTab) {
            activeTab.classList.add('nav-tab--active');
        }

        // Hide all tab panes
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('tab-pane--active');
        });
        
        // Show the selected tab pane
        const targetPane = document.getElementById(`${tabId}-tab`);
        if (targetPane) {
            targetPane.classList.add('tab-pane--active');
        }

        // Setup tab-specific content
        if (tabId === 'cashflow') {
            // Delay chart rendering to ensure container is visible
            setTimeout(() => {
                this.setupCashFlowChart();
            }, 100);
        } else if (tabId === 'report') {
            // Auto-generate report when tab opens
            setTimeout(() => {
                this.generateReport();
            }, 100);
        }
    }

    // Render dashboard overview
    renderDashboard() {
        this.renderFinancialCards();
        this.renderConsolidatedInventory();
        this.renderBusinessMetrics();
        this.updateAlerts();
        this.updateCurrentDate();
    }

    // Render financial cards with updated values
    renderFinancialCards() {
        const bankBalanceEl = document.getElementById('bank-balance');
        const amazonPendingEl = document.getElementById('amazon-pending');
        const amazonCurrentEl = document.getElementById('amazon-current');
        const expectedRevenueEl = document.getElementById('expected-revenue');

        if (bankBalanceEl) {
            bankBalanceEl.textContent = this.formatCurrency(this.data.financial.bank_balance, 'VND');
        }
        if (amazonPendingEl) {
            amazonPendingEl.textContent = this.formatCurrency(this.data.financial.amazon_pending, 'USD');
        }
        if (amazonCurrentEl) {
            amazonCurrentEl.textContent = this.formatCurrency(this.data.financial.amazon_current, 'USD');
        }
        if (expectedRevenueEl) {
            expectedRevenueEl.textContent = this.formatCurrency(this.data.financial.expected_total_revenue, 'USD');
        }
    }

    // Render consolidated FBA inventory table
    renderConsolidatedInventory() {
        const tbody = document.querySelector('#fba-inventory-table tbody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        this.data.inventory_fba_updated.forEach(item => {
            const row = document.createElement('tr');
            
            // Highlight rows with added stock
            if (item.added_stock > 0) {
                row.style.backgroundColor = 'var(--color-bg-3)';
                row.style.fontWeight = 'var(--font-weight-medium)';
            }
            
            const addedStockText = item.added_stock > 0 ? 
                `+${item.added_stock} (${item.quantity - item.added_stock} + ${item.added_stock})` : 
                'Không có';
            
            row.innerHTML = `
                <td><strong>${item.sku}</strong></td>
                <td>${item.name}</td>
                <td><strong>${item.quantity.toLocaleString()}</strong></td>
                <td>$${item.price.toFixed(2)}</td>
                <td><strong>$${item.total_value.toFixed(2)}</strong></td>
                <td>${addedStockText}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Render business metrics
    renderBusinessMetrics() {
        const totalSalesEl = document.getElementById('total-sales');
        const totalOrdersEl = document.getElementById('total-orders');
        const adSpendEl = document.getElementById('ad-spend');
        const adSalesEl = document.getElementById('ad-sales');

        const metrics = this.data.business_metrics;
        
        if (totalSalesEl) {
            totalSalesEl.textContent = `${metrics.total_sales.toLocaleString()} USD`;
        }
        if (totalOrdersEl) {
            totalOrdersEl.textContent = `${metrics.orders.toLocaleString()} đơn hàng`;
        }
        if (adSpendEl) {
            adSpendEl.textContent = `${metrics.ad_spend.toLocaleString()} USD`;
        }
        if (adSalesEl) {
            adSalesEl.textContent = `${metrics.ad_sales.toLocaleString()} USD ads sales`;
        }
    }

    // Update alerts based on current date and payments
    updateAlerts() {
        const alertsContainer = document.getElementById('alerts-container');
        if (!alertsContainer) return;

        const currentDate = new Date('2025-08-15'); // Current date
        const alerts = [];

        // Check for upcoming Amazon payments
        const nextPaymentDate = new Date('2025-08-30');
        const daysTillPayment = Math.ceil((nextPaymentDate - currentDate) / (1000 * 60 * 60 * 24));
        
        if (daysTillPayment <= 15) {
            alerts.push({
                type: 'info',
                message: `🔔 Sắp đến ngày nhận thanh toán Amazon (30/8/2025) - còn ${daysTillPayment} ngày`
            });
        }

        // Check progress alerts
        if (this.data.progress_tracking.inventory_sold < 10) {
            alerts.push({
                type: 'warning',
                message: '⚠️ Tiến độ bán hàng chậm hơn dự kiến - cần tăng cường marketing'
            });
        }

        // Render alerts
        alertsContainer.innerHTML = '';
        alerts.forEach(alert => {
            const alertDiv = document.createElement('div');
            alertDiv.className = `alert alert--${alert.type}`;
            alertDiv.textContent = alert.message;
            alertsContainer.appendChild(alertDiv);
        });
    }

    // Update current date
    updateCurrentDate() {
        const currentDateEl = document.getElementById('current-date');
        if (currentDateEl) {
            currentDateEl.textContent = '15/08/2025';
        }
    }

    // Setup cash flow chart - FIXED
    setupCashFlowChart() {
        const ctx = document.getElementById('cashflow-chart');
        if (!ctx) return;

        // Destroy existing chart if it exists
        if (this.charts.cashflow) {
            this.charts.cashflow.destroy();
        }

        // Extract data for chart
        const labels = this.data.cashflow_timeline.map(item => {
            const date = new Date(item.date);
            return `${date.getDate()}/${date.getMonth() + 1}`;
        });
        
        const amounts = this.data.cashflow_timeline.map(item => 
            Math.round(item.total_vnd / 1000000) // Convert to millions VND
        );

        this.charts.cashflow = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Số dư ngân hàng (triệu VND)',
                    data: amounts,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#1FB8CD',
                    pointBorderColor: '#1FB8CD',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Dự báo dòng tiền theo các mốc thanh toán (15-30 hàng tháng)',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Triệu VND'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString() + 'M';
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Thời gian (ngày/tháng)'
                        }
                    }
                }
            }
        });
    }

    // Refresh data
    refreshData() {
        this.renderDashboard();
        this.showToast('🔄 Dữ liệu đã được cập nhật thành công', 'success');
    }

    // Update financial data
    updateFinancial() {
        const bankBalanceEl = document.getElementById('update-bank-balance');
        const amazonPendingEl = document.getElementById('update-amazon-pending');
        const amazonCurrentEl = document.getElementById('update-amazon-current');
        
        const bankBalance = bankBalanceEl ? bankBalanceEl.value : '';
        const amazonPending = amazonPendingEl ? amazonPendingEl.value : '';
        const amazonCurrent = amazonCurrentEl ? amazonCurrentEl.value : '';
        
        let updated = false;
        
        if (bankBalance && !isNaN(parseFloat(bankBalance))) {
            this.data.financial.bank_balance = parseFloat(bankBalance);
            updated = true;
        }
        
        if (amazonPending && !isNaN(parseFloat(amazonPending))) {
            this.data.financial.amazon_pending = parseFloat(amazonPending);
            updated = true;
        }
        
        if (amazonCurrent && !isNaN(parseFloat(amazonCurrent))) {
            this.data.financial.amazon_current = parseFloat(amazonCurrent);
            updated = true;
        }
        
        if (updated) {
            this.renderFinancialCards();
            this.showToast('💰 Thông tin tài chính đã được cập nhật', 'success');
            
            // Clear form
            if (bankBalanceEl) bankBalanceEl.value = '';
            if (amazonPendingEl) amazonPendingEl.value = '';
            if (amazonCurrentEl) amazonCurrentEl.value = '';
        } else {
            this.showToast('⚠️ Vui lòng nhập ít nhất một giá trị hợp lệ', 'warning');
        }
    }

    // Load tasks for selected week
    loadWeekTasks(weekId) {
        const container = document.getElementById('tasks-update-list');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (!weekId) return;
        
        // Find the timeline period
        const timelinePeriod = this.data.detailed_timeline.find(period => {
            if (weekId === 'week3-aug' && period.period.includes('Tuần 3')) return true;
            if (weekId === 'week4-aug' && period.period.includes('Tuần 4')) return true;
            return false;
        });
        
        if (!timelinePeriod) {
            container.innerHTML = '<p>Chưa có dữ liệu cho tuần này</p>';
            return;
        }
        
        timelinePeriod.tasks.forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.style.marginBottom = '12px';
            taskDiv.style.padding = '12px';
            taskDiv.style.border = '1px solid var(--color-border)';
            taskDiv.style.borderRadius = 'var(--radius-base)';
            taskDiv.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <strong>${task.date}</strong>
                    <span style="font-size: 12px; color: var(--color-text-secondary);">${task.responsible}</span>
                </div>
                <div style="margin-bottom: 8px;">${task.task}</div>
                <select data-week="${weekId}" data-task="${index}" style="width: 100%; padding: 6px; border-radius: 4px;">
                    <option value="pending" ${task.status === 'pending' ? 'selected' : ''}>Chờ thực hiện</option>
                    <option value="in_progress" ${task.status === 'in_progress' ? 'selected' : ''}>Đang thực hiện</option>
                    <option value="completed" ${task.status === 'completed' ? 'selected' : ''}>Hoàn thành</option>
                    <option value="scheduled" ${task.status === 'scheduled' ? 'selected' : ''}>Đã lên lịch</option>
                </select>
            `;
            container.appendChild(taskDiv);
        });
    }

    // Update progress
    updateProgress() {
        const weekSelectEl = document.getElementById('week-select');
        const weekId = weekSelectEl ? weekSelectEl.value : '';
        
        if (!weekId) {
            this.showToast('⚠️ Vui lòng chọn tuần để cập nhật', 'warning');
            return;
        }
        
        // Update task statuses
        const selects = document.querySelectorAll('#tasks-update-list select');
        let updatedCount = 0;
        
        selects.forEach(select => {
            if (select.dataset.week === weekId) {
                const taskIndex = parseInt(select.dataset.task);
                const timelinePeriod = this.data.detailed_timeline.find(period => {
                    if (weekId === 'week3-aug' && period.period.includes('Tuần 3')) return true;
                    if (weekId === 'week4-aug' && period.period.includes('Tuần 4')) return true;
                    return false;
                });
                
                if (timelinePeriod && timelinePeriod.tasks[taskIndex]) {
                    timelinePeriod.tasks[taskIndex].status = select.value;
                    updatedCount++;
                }
            }
        });
        
        if (updatedCount > 0) {
            this.showToast(`✅ Đã cập nhật trạng thái ${updatedCount} công việc`, 'success');
            
            // Clear selection
            if (weekSelectEl) weekSelectEl.value = '';
            const tasksContainer = document.getElementById('tasks-update-list');
            if (tasksContainer) tasksContainer.innerHTML = '';
        }
    }

    // Generate report - ENHANCED
    generateReport() {
        const currentDate = new Date().toLocaleDateString('vi-VN');
        
        let report = `**KÍNH GỬI: ANH TÂN BÙI**
**BÁO CÁO TÌNH HÌNH THANH LÝ NEWBAM**
**Kỳ: ${currentDate}**

**I. TÌNH HÌNH TÀI CHÍNH:**
- Số dư bank hiện tại: ${this.formatCurrency(this.data.financial.bank_balance, 'VND')}
- Tiền Amazon đã về: ${this.formatCurrency(this.data.financial.amazon_current, 'USD')}
- Tiền Amazon sắp về (30/8): ${this.formatCurrency(this.data.financial.amazon_pending, 'USD')}
- Dự kiến thu về tổng cộng: ${this.formatCurrency(this.data.financial.expected_total_revenue, 'USD')}

**II. TIẾN ĐỘ CÔNG VIỆC:**
- Đông Huỳnh: ${this.data.progress_tracking.overall_liquidation}% - Quản lý tổng thể, xử lý hàng tồn
- Anh Thuận: ${this.data.progress_tracking.tasks_completed}% - Phân loại NVL, tìm đầu mối thanh lý máy
- Chị Thư: ${this.data.progress_tracking.revenue_collected}% - Báo cáo tài chính, theo dõi thanh toán

**III. TỒNKHO & BÁN HÀNG (ĐÃ CỘNG HÀNG BỔ SUNG):**
- Cashew001 (Lightly Salted): 2,428 units (+48 bổ sung từ 2 thùng muối)
- Cashew004 (Spicy Tom Yum): 322 units (+312 bổ sung từ 13 thùng tomyum) 
- Cashew008 (Honey Roasted): 386 units
- Cashew006 (Mix Variety): 918 units
- Cashew005 (Sea Salt Caramel): 146 units

**IV. CHỈ SỐ KINH DOANH 90 NGÀY:**
- TACOS: ${this.data.business_metrics.tacos}% (cải thiện ${Math.abs(this.data.business_metrics.tacos_change)}%)
- ACOS: ${this.data.business_metrics.acos}% (cải thiện ${Math.abs(this.data.business_metrics.acos_change)}%)
- Tổng doanh số: ${this.formatCurrency(this.data.business_metrics.total_sales, 'USD')}
- Tổng đơn hàng: ${this.data.business_metrics.orders.toLocaleString()} đơn

**V. KẾ HOẠCH TIẾP THEO:**
- 19-20/8: Đông gửi 15 thùng hàng bổ sung lên FBA
- 21/8: Chấm dứt hợp đồng chị Thanh  
- 22-25/8: Thuận phân loại đóng thùng NVL (hộp, cuộn màng)
- 26-28/8: Thuận tìm đầu mối thanh lý máy đóng gói
- 30/8: Nhận thanh toán Amazon kỳ 2 (5,500 USD)
- 30/8: Thư báo cáo tài chính định kỳ 15 ngày

**VI. DÒNG TIỀN DỰ KIẾN (các mốc 15-30 hàng tháng):**
- 30/8/2025: ~302 triệu VND (sau thanh toán Amazon + lương)
- 15/9/2025: ~427 triệu VND  
- 30/9/2025: ~547 triệu VND
- 15/10/2025: ~657 triệu VND
- 30/10/2025: ~762 triệu VND
- 15/11/2025: ~857 triệu VND
- 30/11/2025 (CHỐT CUỐI): ~932 triệu VND

**Trân trọng,**
**Đông Huỳnh**`;

        const reportContentEl = document.getElementById('report-content');
        if (reportContentEl) {
            reportContentEl.textContent = report;
        }
        this.showToast('📝 Báo cáo đã được tạo thành công', 'success');
    }

    // Copy report to clipboard
    copyReport() {
        const reportContentEl = document.getElementById('report-content');
        const reportContent = reportContentEl ? reportContentEl.textContent : '';
        
        if (!reportContent.trim()) {
            this.showToast('⚠️ Vui lòng tạo báo cáo trước khi copy', 'warning');
            return;
        }
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(reportContent).then(() => {
                this.showToast('📋 Báo cáo đã được copy vào clipboard', 'success');
            });
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = reportContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showToast('📋 Báo cáo đã được copy vào clipboard', 'success');
        }
    }

    // Print report
    printReport() {
        const reportContentEl = document.getElementById('report-content');
        const reportContent = reportContentEl ? reportContentEl.textContent : '';
        
        if (!reportContent.trim()) {
            this.showToast('⚠️ Vui lòng tạo báo cáo trước khi in', 'warning');
            return;
        }
        
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Báo cáo Thanh lý Newbam</title>
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            line-height: 1.6; 
                            padding: 20px;
                            max-width: 800px;
                            margin: 0 auto;
                        }
                        pre { 
                            white-space: pre-wrap; 
                            font-family: inherit; 
                            font-size: 14px;
                        }
                        h1 { color: #1FB8CD; }
                        strong { color: #000; }
                    </style>
                </head>
                <body>
                    <pre>${reportContent}</pre>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
        this.showToast('🖨️ Báo cáo đã được gửi tới máy in', 'success');
    }

    // Email report (simulate)
    emailReport() {
        const reportContentEl = document.getElementById('report-content');
        const reportContent = reportContentEl ? reportContentEl.textContent : '';
        
        if (!reportContent.trim()) {
            this.showToast('⚠️ Vui lòng tạo báo cáo trước khi gửi email', 'warning');
            return;
        }
        
        // Simulate email functionality
        const subject = `Báo cáo thanh lý Newbam - ${new Date().toLocaleDateString('vi-VN')}`;
        const body = encodeURIComponent(reportContent);
        const mailtoLink = `mailto:tanbui@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Try to open mail client
        window.open(mailtoLink, '_blank');
        this.showToast('📧 Đang mở ứng dụng email...', 'info');
    }

    // Format currency
    formatCurrency(amount, currency) {
        if (currency === 'VND') {
            return amount.toLocaleString('vi-VN') + ' VND';
        } else {
            return '$' + amount.toLocaleString();
        }
    }

    // Show toast notification
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.innerHTML = `<span>${message}</span>`;
        
        container.appendChild(toast);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 5000);
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new NewbamDashboard();
});