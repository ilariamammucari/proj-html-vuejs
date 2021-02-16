var app = new Vue({
    el: '#root',
    data: {
        listaHeaderSx: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
        corsi: [
            {
                immagine: '1',
                costo: '$40.00',
                descrizione: 'Learning to write as a Professional Author',
                lezioni: '20 Lessons',
                studenti: '50 Students'
            },
            {
                immagine: '2',
                costo: '$0.00',
                descrizione: 'Customer-centric Info-Tech Strategies',
                lezioni: '24 Lessons',
                studenti: '769 Students'
            },
            {
                immagine: '3',
                costo: '$19.00',
                descrizione: 'Open Programming for Everyone: Python',
                lezioni: '17 Lessons',
                studenti: '62 Students'
            }
        ],
        blogs: [
            {
                immagine: '1.jpeg',
                tipo: 'ARTIST',
                titolo: 'Brush Strokes Energize Trees in Paintings',
                calendario: 'May 15, 2020',
                visualizzazioni: '688 views'
            },
            {
                immagine: '2.jpg',
                tipo: 'ARTIST',
                titolo: 'Pocket-Sized Notebooks Hold Miniature paitings',
                calendario: 'May 15, 2020',
                visualizzazioni: '688 views'
            },
            {
                immagine: '3.jpg',
                tipo: 'ARTIST',
                titolo: 'Connection Between Self-Portraits and Identity',
                calendario: 'May 15, 2020',
                visualizzazioni: '688 views'
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
        informazioni: ['Membership', 'Purchase guide', 'Privacy polocy', 'Terms of service'],
        valoreEmail: '',
        emails: []
    },
    methods: {
        salvaEmails(){
            if ( this.valoreEmail.length < 5 || !this.valoreEmail.includes('@') || !this.valoreEmail.includes('.it') && !this.valoreEmail.includes('.com')){
                alert('Inserisci un\'email corretta! l\'email deve contenere: almeno cinque caratteri, "@" e ".com, .it"')
            } else if ( !this.emails.includes(this.valoreEmail) ) {
                this.emails.push(this.valoreEmail.toLowerCase());
                this.emails.sort();
            }
            this.valoreEmail = ''
            console.log(this.emails);
        }
    }
});
