# DigitalEdit.gm — Photography Studio Website

A responsive, premium editorial-style website concept using cream, beige, white and champagne-gold tones for a photography and high-class photo-retouching studio.

## Run it in VS Code on Windows

1. Extract the ZIP file.
2. Open the extracted `digitaledit-gm` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local address printed in the terminal (usually `http://localhost:5173/`).

## Before publishing

Open `src/main.jsx` and update:

- `WHATSAPP_NUMBER` — replace `2200000000` with the studio's real WhatsApp number, including country code and digits only.
- `INSTAGRAM_URL` — currently set to `https://www.instagram.com/digitaledit.gm/`.
- Replace the sample Unsplash images in the `portfolio` array and hero CSS with the studio's own approved photographs. The portfolio is a design preview, not a claim that these are DigitalEdit.gm's photos.
- Confirm the actual service list, studio location, booking process, and contact details with the owner.

## Production build

```bash
npm run build
npm run preview
```

## Included

- Responsive navigation
- Luxury dark-and-champagne visual direction
- Animated hero and portfolio transitions
- Filterable portfolio categories and project detail modals
- Service showcase
- Enquiry form that opens a prefilled WhatsApp message
- Instagram and WhatsApp links
- Mobile responsive layout

## Important limitations

This is a front-end project. The enquiry form hands off to WhatsApp and does not save bookings in a database. It does not include a CMS, online payments, customer accounts, or a booking calendar. Google Fonts and remote sample photos require an internet connection.