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
        ],
        blogs: [
            {
                immagine: '1.jpeg',
                tipo: 'ARTIST',
                titolo: 'Brush Strokes Energize Trees in Paintings'
            },
            {
                immagine: '2.jpg',
                tipo: 'ARTIST',
                titolo: 'Pocket-Sized Notebooks Hold Miniature paitings'
            },
            {
                immagine: '3.jpg',
                tipo: 'ARTIST',
                titolo: 'Connection Between Self-Portraits and Identity'
            }
        ],
        indirizzi: ['328 Ne 19lst St # 87394 Miami, FL 33270-3899', '+1 (305) 547-9909 (9am - 5pm EST, Monday -Friday)', 'support@maxcoach.com'],
        socials: [
            {
                tipo: 'facebook-square'
            },
            {
                tipo: 'twitter'
            },
            {
                tipo: 'instagram'
            },
            {
                tipo: 'linkedin'
            }
        ],
        esplora: ['Start here', 'Blog', 'About Us', 'Success story', 'Courses', 'Contact us'],
        informazioni: ['Membership', 'Purchase guide', 'Privacy polocy', 'Terms of service']
    }
});
