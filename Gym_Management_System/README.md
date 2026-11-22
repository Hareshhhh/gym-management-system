# IronHub Gym Management System

A responsive academic demo project built with HTML5, CSS3, Bootstrap 5 and JavaScript.

## Project structure
- `Client/` — public-facing gym website (6 pages)
- `Admin/` — gym administration interface (6 pages)
- `assets/` — shared stylesheet and JavaScript
- `Client_Screenshots.pdf` — screenshots of all client pages
- `Admin_Screenshots.pdf` — screenshots of all admin pages
- `Project_Wireframe.pdf` — low-fidelity page wireframes
- `GitHub_Link.txt` — repository URL placeholder and publishing steps

## Run locally
Open `Client/index.html` in a browser. Open `Admin/index.html` for the admin panel. For best results, use a local static server (VS Code Live Server).

## Demo behaviour
- Registration form adds a pending member to browser `localStorage`.
- Contact form saves enquiries to browser `localStorage`.
- Admin members page can search and remove demo members.
- Admin enquiries page can resolve saved enquiries.
- Demo login is a front-end placeholder only.

## Important limitations
This is a front-end academic demonstration. It does not include a backend, real authentication, payment gateway, database, or secure user accounts. Browser storage is local to the browser/device.

## GitHub Pages deployment
1. Create a new public GitHub repository named `gym-management-system`.
2. Upload the contents of this folder (not the ZIP itself) to the repository root.
3. In repository Settings → Pages, choose Deploy from a branch, select `main` and `/ (root)`, then Save.
4. After publishing, paste the repository URL into `GitHub_Link.txt` and optionally add the GitHub Pages website URL.
