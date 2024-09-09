document.addEventListener('DOMContentLoaded', () => {
    const stockItems = [
        {
            imgSrc: 'rice.jpg',
            altText: 'Product 1',
            description: 'Product 1',
            available: 50,
        },
        {
            imgSrc: 'beans.jpg',
            altText: 'Product 2',
            description: 'Product 2',
            available: 70,
        },
        {
            imgSrc: 'peas.jpg',
            altText: 'Product 3',
            description: 'Product 3',
            available: 40,
        },
        {
            imgSrc: 'corn.jpg',
            altText: 'Product 4',
            description: 'Product 4',
            available: 100,
        },
        {
            imgSrc: 'soyabeans.jpg',
            altText: 'Product 5',
            description: 'Product 5',
            available: 80,
        },
        {
            imgSrc: 'gnuts.jpg',
            altText: 'Product 6',
            description: 'Product 6',
            available: 60,
        }
    ];

    const stockContainer = document.querySelector('.stock-container');

    stockItems.forEach(item => {
        const stockItemDiv = document.createElement('div');
        stockItemDiv.classList.add('stock-item');

        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.altText;
        stockItemDiv.appendChild(img);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');

        const productDescription = document.createElement('p');
        productDescription.textContent = item.description;
        descriptionDiv.appendChild(productDescription);

        const availableDescription = document.createElement('p');
        availableDescription.textContent = `Available: ${item.available} kilos`;
        descriptionDiv.appendChild(availableDescription);

        stockItemDiv.appendChild(descriptionDiv);

        stockContainer.appendChild(stockItemDiv);
    });
});
