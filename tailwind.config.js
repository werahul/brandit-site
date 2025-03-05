/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'kanit': ['Kanit', 'serif-ui'],
    },
    fontSize: {
        'hero-banner': ['69px', '100%'], // hero banner
        'h1': ['86px', '100%'], // H1
        'h2': ['55px', '100%'], // H2
        'h3': ['44px', '100%'], // H3
        'h4': ['35px', '100%'], // H4
        'h5': ['28px', '120%'], // H5
        'h6': ['21px', '120%'], // H6
        'body': ['18px', '120%'], // Body
        'caption': ['14px', '120%'], // Caption
        'small-text': ['12px', '120%'], // Small Text
        'body-para': ['18px', '30px'], // Body Paragraph
        'service-para': ['23px', '140%'], // Service Paragraph
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
      },
    extend: {
      backgroundImage: {
        'green-gradient': 'linear-gradient(to right, #45D400, #36BA00, #005E00)',
        'black-gradient': 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
      },
    },
  },
  plugins: [],
}