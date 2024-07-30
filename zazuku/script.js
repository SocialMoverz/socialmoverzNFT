window.addEventListener('load', () => {
    const connectButton = document.getElementById('connectButton');
    if (connectButton) {
        connectButton.addEventListener('click', async () => {
            if (typeof window.ethereum !== 'undefined') {
                try {
                    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                    console.log('Connected account:', accounts[0]);
                    window.location.href = 'connect-wallet.html';
                } catch (error) {
                    console.error('User rejected the request:', error);
                }
            } else {
                alert('Please install Metamask!');
            }
        });
    }
});
