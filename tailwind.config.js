/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Garamond': ['EB Garamond'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '0rem',
      },
    },
    extend: {
      dropShadow: {
        'customShadow': '0px 20px 30px #00000025',
        'customShadow2': '10px 20px 30px #00000016',
        'customShadow4': '0px 20px 30px #00000016',
        'customShadow3': '0px 3px 6px #00000016',
      },
      borderRadius : {
        'largee' : '50px',
      },
      backgroundSize : {
        "adjust" : "100% 100%"
      },
      fontSize: {
        'XlargeFont': '50px',
      },
      colors: {
        dark : {
          "100" : "#1C2F2B",
        },
        light : {
          "100" : "#FAF3F9",
          "200" : "#F8F8F8",
        },
        pink : {
          "100" : "#C47080",
        },
        grey : {
          "100" : "#D3D3D3",
          "200" : "#88B1B1",
          "300" : "#C6C6C6",
        },
      },
      backgroundImage: {
        'banner': "url('../src/img/banner.jpg')",
        'banner2': "url('../src/img/inside-banner1.jpg')",
        'banner3': "url('../src/img/inside-banner2.jpg')",
        'banner4': "url('../src/img/inside-banner3.jpg')",
        'events2': "url('../src/img/events-bg3.jpg')",
        'inside-h': "url('../src/img/inside-home.svg')",
        'insideflo': "url('../src/img/inside-flower.svg')",
        'flower2': "url('../src/img/flower2.svg')",
        'smlayer': "url('../src/img/layer2.svg')",
        'roundflo': "url('../src/img/round-flower.svg')",
        'language': "url('../src/img/language.svg')",
        'language2': "url('../src/img/language2.svg')",
        'arrowright': "url('../src/img/arrow-right.svg')",
        'admin': "url('../src/img/admin.svg')",
        'calender': "url('../src/img/calender.svg')",
        'homeicon': "url('../src/img/home-icon.svg')",
        'visitflower': "url('../src/img/visitor-flower.svg')",
        'message': "url('../src/img/message.svg')",
        'overon': "url('../src/img/overons-layer.svg')",
        'footerlayer': "url('../src/img/footer-layer.svg')",
        'arrowrightb': "url('../src/img/arrow-rightb.svg')",
        'theehuis-logo': "url('../src/img/theehuis-l.svg')",
      },
    },
  },
  plugins: [],
}

