var app = new Vue({
    el: '#root',
    data: {
        listaHeaderSx: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
        corsi: [
            {
                immagine: '1',
                costo: '$40.00',
                descrizione: 'Learning to write as a Professional Author'
            },
            {
                immagine: '2',
                costo: '$0.00',
                descrizione: 'Customer-centric Info-Tech Strategies'
            },
            {
                immagine: '3',
                costo: '$19.00',
                descrizione: 'Open Programming for Everyone: Python'
            }
        ]
    }
});