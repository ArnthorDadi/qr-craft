# QR Code Generator  

A Next.js web app for creating and customizing QR codes with ease. Users can adjust the color scheme, size, and download their QR codes as images.  

## Features  
- **Input Options**: Encode text or URLs into QR codes.  
- **Color Customization**: Choose foreground and background colors using a color picker.  
- **Size Adjustment**: Select the desired size for your QR code.  
- **Downloadable QR Codes**: Save the QR code as an image using `html2canvas`.  

## Technologies Used  
- **[Next.js](https://nextjs.org/)**: Framework for building fast, scalable web applications.  
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.  
- **[next-qrcode](https://github.com/bunlong/next-qrcode)**: Library for QR code generation.  
- **[react-colorful](https://github.com/omgovich/react-colorful)**: Lightweight color picker for React.  
- **[html2canvas](https://github.com/niklasvh/html2canvas)**: Library for converting HTML elements into downloadable images.  

## Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/ArnthorDadi/qr-craft
   ```  

2. Install dependencies:
   ```bash
   pnpm install
   ```  

3. Run the development server:
   ```bash
   pnpm run dev
   ```  
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. Enter the text or URL you want to encode.
2. Use the color pickers to customize the foreground and background colors.
3. Adjust the size slider to set the desired QR code size.
4. Click "Download" to save the QR code as an image.

## Contributing

Contributions are welcome! If you'd like to add new features or fix bugs, feel free to fork the repository and submit a
pull request.

## License

This project is licensed under the MIT License.

---  

Made with ❤️ using Next.js and Tailwind CSS.
