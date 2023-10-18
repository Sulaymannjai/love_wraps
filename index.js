document.getElementById('submit-btn').addEventListener('click', async function() {
    const salesData = document.getElementById('sales-data').value;
    const response = await fetch('/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ salesData })
    });

    const result = await response.json();
    document.getElementById('result').textContent = result.message;
});
