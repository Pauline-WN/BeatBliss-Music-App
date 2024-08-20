BeatBliss Music App
===================

BeatBliss is a React-based music application that allows users to browse, play, and manage their favorite songs. The app leverages the iTunes API for music discovery and provides features like playlist management, dark/light mode switching, and more.

Features
--------

-   **Browse Music**: Search for and discover new music using the iTunes API.
-   **Play Songs**: Play song previews with controls for shuffle, loop, and replay.
-   **Manage Playlist**: Add and remove songs from your playlist.
-   **Share Playlist**: Share your playlist with friends using a unique URL.
-   **Dark/Light Mode**: Switch between dark and light themes.

Installation
------------

To set up the BeatBliss Music App locally, follow these steps:

1.  **Clone the repository**:

    bash

    Copy code

    `git clone https://github.com/yourusername/beatbliss-music-app.git`

2.  **Navigate to the project directory**:

    bash

    Copy code

    `cd beatbliss-music-app`

3.  **Install dependencies**:

    bash

    Copy code

    `npm install`

4.  **Start the development server**:

    bash

    Copy code

    `npm start`

    The app will be available at `http://localhost:3000`.

Usage
-----

-   **Search for Music**: Use the search bar in the header to find songs or artists.
-   **Play Songs**: Click on a song to start playing it. Use the controls to manage playback.
-   **Manage Playlist**: Add songs to your playlist and view them on the "My Playlist" page. Remove songs as needed.
-   **Switch Themes**: Toggle between light and dark modes using the theme switcher button in the header.
-   **Share Playlist**: Click on the "Share Playlist" button on the playlist page to copy a shareable URL to your clipboard.

Dependencies
------------

This project uses the following dependencies:

-   **React**: A JavaScript library for building user interfaces.
-   **React Router DOM**: Provides routing capabilities for React applications.
-   **lodash.debounce**: A utility for debouncing function calls.
-   **Font Awesome**: Provides icon support for various UI elements.

To install these dependencies, run:

bash

Copy code

`npm install react react-dom react-router-dom lodash.debounce @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons`

Components
----------

-   **App**: The main component that handles routing and state management.
-   **Header**: Displays the app title, search bar, and theme switcher.
-   **Sidebar**: Provides navigation links to different pages.
-   **Footer**: Shows the footer content.
-   **BrowseMusic**: Allows users to browse and select songs.
-   **PlayingNow**: Displays the currently playing song with playback controls.
-   **MyPlaylist**: Shows the user's playlist with options to remove songs.
-   **SharePlaylist**: Provides a button to share the playlist via a URL.
-   **About**: Provides information about the app.

Contributing
------------

Contributions are welcome! If you would like to contribute to the BeatBliss Music App, please contact the following team members:

-   Peter Ndung'u
-   Pauline Nguru
-   Samuel Ndegwa
-   Shem Karafa

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

Contact
-------

For questions or feedback, please reach out to us at support@beatbliss.com.