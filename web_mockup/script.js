const campaigns = [
    { id: 1, name: "Clean Water Initiative", goal: 5000, raised: 1200 },
    { id: 2, name: "Education for All", goal: 3000, raised: 2500 },
    { id: 3, name: "Save the Forests", goal: 10000, raised: 4500 },
    { id: 4, name: "Emergency Relief Fund", goal: 2000, raised: 1800 }
];

const listContainer = document.getElementById('campaign-list');
const dialogOverlay = document.getElementById('dialog-overlay');
const campaignNameSpan = document.getElementById('campaign-name');
const donationInput = document.getElementById('donation-amount');
const confirmBtn = document.getElementById('dialog-confirm');
const cancelBtn = document.getElementById('dialog-cancel');
const notificationContainer = document.getElementById('notification-container');

let activeCampaign = null;

function renderList() {
    listContainer.innerHTML = '';
    campaigns.forEach(campaign => {
        const progress = Math.min((campaign.raised / campaign.goal) * 100, 100);
        const card = document.createElement('div');
        card.className = 'campaign-card';
        card.innerHTML = `
            <h2>${campaign.name}</h2>
            <div class="goal">Goal: $${campaign.goal}</div>
            <div class="raised">Raised: $${campaign.raised.toFixed(2)}</div>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${progress}%"></div>
            </div>
        `;
        card.onclick = () => openDonationDialog(campaign);
        listContainer.appendChild(card);
    });
}

function openDonationDialog(campaign) {
    activeCampaign = campaign;
    campaignNameSpan.textContent = campaign.name;
    donationInput.value = '';
    dialogOverlay.classList.remove('hidden');
    donationInput.focus();
}

function closeDialog() {
    dialogOverlay.classList.add('hidden');
    activeCampaign = null;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notificationContainer.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

confirmBtn.onclick = () => {
    const amount = parseFloat(donationInput.value);
    if (isNaN(amount) || amount <= 0) return;

    const oldRaised = activeCampaign.raised;
    activeCampaign.raised += amount;
    
    renderList();
    closeDialog();

    showNotification(`Successfully donated $${amount} to ${activeCampaign.name}!`);

    if (oldRaised < activeCampaign.goal && activeCampaign.raised >= activeCampaign.goal) {
        setTimeout(() => {
            showNotification(`Goal Reached! The campaign '${activeCampaign.name}' has met its target!`);
        }, 1000);
    }
};

cancelBtn.onclick = closeDialog;

// Initial render
renderList();
