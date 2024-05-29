let cards = document.querySelector('.cards')

fetch('https://fakestoreapi.com/users')
.then(res => res.json())
.then(products => createCards(products))
.catch(err => console.error('Error fetching data:', err));

function createCards(products) {
    products.forEach(product => {
        let card = document.createElement('div')
        card.classList.add('card')
        
        let id = document.createElement('div')
        id.classList.add('idNumber')
        id.textContent = `id: ${product.id}`

        let titleProduct = document.createElement('h2')
        titleProduct.classList.add('titile')
        titleProduct.textContent = `title: ${product.password}`

        let descriptionProduct = document.createElement('p')
        descriptionProduct.classList.add('description')
        descriptionProduct.textContent = `${product.username}`

        let price = document.createElement('p')
        price.classList.add('price')
        price.textContent = `${product.phone}`

        card.append(id, titleProduct, descriptionProduct, price)
        cards.appendChild(card)
    });
}