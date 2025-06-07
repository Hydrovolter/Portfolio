import os
import json
import difflib
import html

# --- CONFIGURATION ---

# 1. The list of directories to skip.
EXCLUDED_DIRS = {'template', 'js', 'css', 'covers', '.git', '__pycache__', 'assets'}

# 2. JSON data of game titles and descriptions.
GAMES_JSON_DATA = """
{
  "games": [
    { "title": "Wordle", "description": "Guess the 5-letter hidden word in 6 tries - unlimited puzzles." },
    { "title": "The Final Earth 2", "description": "Build and manage your own civilization in space!" },
    { "title": "Connections", "description": "Group words into meaningful categories - unlimited puzzles." },
    { "title": "Suika", "description": "[IFRAME] Merge fruits to create bigger ones, combining strategy and charm for endlessly addictive fun." },
    { "title": "Suika Clone", "description": "A clone of the original Suika game (use if the original Suika is blocked)" },
    { "title": "Block Blast", "description": "Fit blocks into a grid to clear lines and score points." },
    { "title": "Crossy Road", "description": "Guide your character across a chaotic landscape filled with hazards." },
    { "title": "Slope", "description": "Control a ball rolling down a steep slope, avoiding obstacles and drops." },
    { "title": "Tetris", "description": "Rotate and stack falling blocks to complete lines and clear the board." },
    { "title": "Getaway Shootout", "description": "[MULTIPLAYER] Race to the getaway point while battling opponents with quirky weapons and power-ups." },
    { "title": "2048", "description": "Combine matching numbers on a grid to reach the 2048 tile." },
    { "title": "Eggy Car", "description": "Balance an egg on top of a car while navigating hilly roads without dropping it." },
    { "title": "Super Star Car", "description": "Race on dynamic tracks, and aim to overtake rivals and win the championship." },
    { "title": "Geometry Dash", "description": "Jump and fly through challenging levels full of obstacles on the beat." },
    { "title": "Drift Boss", "description": "Steer your car around sharp turns and avoid falling off the track." },
    { "title": "Basketball Legends", "description": "Compete as famous basketball stars, performing epic dunks and special moves to win matches." },
    { "title": "Super Mario Bros", "description": "A remake of Nintendo's original Super Mario Bros. Includes original 32 levels, random map generator, and mods." },
    { "title": "ZType", "description": "Practice your typing through destroying enemy ships by typing words quickly and accurately." },
    { "title": "World's Hardest Game", "description": "You can't beat it." },
    { "title": "Drive Mad", "description": "Navigate tricky tracks, overcoming obstacles and challenges to reach the finish line." },
    { "title": "Rooftop Snipers", "description": "[MULTIPLAYER] Battle on rooftops, using precise shots to knock your opponent off the edge." },
    { "title": "Idle Restaurants", "description": "Build and upgrade restaurants, serve customers, and grow your food empire." },
    { "title": "Bubble Tower 3D", "description": "Pop colorful bubbles on a rotating tower to clear levels and earn points." },
    { "title": "Fruit Ninja", "description": "Slice flying fruit while avoiding bombs to rack up high scores." },
    { "title": "Subway Surfers", "description": "Dash through subway tracks, dodging trains and obstacles while collecting coins and power-ups." },
    { "title": "Little Alchemy 2", "description": "Combine elements to discover new items and build an entire world from scratch." },
    { "title": "Ballistic", "description": "Bounce balls to break squares and clear levels while aiming for high scores." },
    { "title": "The Impossible Quiz", "description": "Bizarre questions and tricky puzzles that test your logic and patience." },
    { "title": "Cookie Clicker 2", "description": "Bake cookies, upgrade your production, build a cookie empire and click!" },
    { "title": "Retro Bowl", "description": "Manage a football team, make strategic plays, and lead your squad to victory." },
    { "title": "Doodle Jump", "description": "Guide a jumping character upward by bouncing on platforms and avoiding obstacles." },
    { "title": "Word Bomb (Single Player)", "description": "Quickly type words containing given letter combinations before time runs out. [SINGLE PLAYER]" },
    { "title": "Plants vs. Zombies", "description": "Defend your home by planting unique plants to stop waves of invading zombies. [MODDED]" },
    { "title": "Bitlife", "description": "A life simulation game where you make choices to shape your journey from birth to death." },
    { "title": "Flappy Bird", "description": "A remake of the original Flappy Bird. Navigate a bird through gaps between pipes without crashing." },
    { "title": "Chrome Dino", "description": "Replica of Chrome's famous offline endless runner game - jump over and dodge obstacles for as long as possible!" },
    { "title": "Color Paths", "description": "A knock-off of the game Flow Free - connect matching colored dots with paths without overlapping to fill the grid." },
    { "title": "Hole.io", "description": "A remake of the original hole.io - control a black hole, consuming objects to grow bigger and dominate the city." },
    { "title": "Bad Ice Cream", "description": "Collect fruit, break ice blocks, and avoid enemies in a series of maze-like levels." },
    { "title": "Snow Rider 3D", "description": "Glide down snowy slopes, dodge obstacles, and perform jumps for high scores." },
    { "title": "Boxel Rebound", "description": "Control a box and jump over obstacles to complete levels with precise timing." },
    { "title": "Gun Mayhem 2", "description": "[MULTIPLAYER] Battle opponents on dynamic platforms using a variety of weapons and power-ups." },
    { "title": "Mr Bullet", "description": "Strategically shoot enemies, bounce bullets, and solve levels with precision." },
    { "title": "Tunnel Rush 2", "description": "Navigate through a colorful, twisting tunnel while dodging obstacles at high speed." },
    { "title": "Osu", "description": "The best rhythm game, ported to the web, with millions of mirrored beatmaps." },
    { "title": "Particle Clicker", "description": "An addictive incremental idle clicker game, taking you through the historic journey of modern particle physics." },
    { "title": "Gladihoppers", "description": "[MULTIPLAYER] Control a gladiator and use unpredictable physics and various weapons to defeat opponents." },
    { "title": "Gun Spin", "description": "Shoot to propel a spinning gun as far as possible, collecting coins and aiming for high scores." },
    { "title": "Glitch Dash", "description": "Navigate through a neon, obstacle-filled world with quick reflexes and precise movements." },
    { "title": "Sling Drift", "description": "Use slingshot mechanics to drift around sharp corners and stay on the track." },
    { "title": "Timber Guy", "description": "Chop down trees fast while avoiding branches." },
    { "title": "Stack", "description": "Build the tallest tower possible by stacking moving blocks with precise timing." },
    { "title": "Stickman Hook", "description": "Swing through levels as a stickman, using ropes and momentum to reach the finish line." },
    { "title": "Monkey Mart", "description": "Control a monkey running a supermarket, stocking shelves and serving customers." },
    { "title": "Infiltrating the Airship", "description": "Help Henry Stickman navigate an airship through silly decisions." },
    { "title": "Getting Over It", "description": "The ultimate test of patience - Scratch Edition." },
    { "title": "Minecraft (1.5.2)", "description": "[SINGLEPLAYER + MULTIPLAYER] Ported version of Minecraft, running eaglercraft-1-5." },
    { "title": "Minecraft (1.8.8)", "description": "[MULTIPLAYER] Ported version of Minecraft, running eaglercraft-1-8." },
    { "title": "Tiny Tycoon", "description": "Build your own tiny tycoon on a tiny planet!" },
    { "title": "10 Minutes Till Dawn", "description": "Fight off waves of enemies using various weapons and upgrades, lasting as long as possible." },
    { "title": "Rocket League", "description": "A clone of rocket league, the popular car-football game." },
    { "title": "Edge Surf", "description": "Microsoft's famous offline game, Edge Surf!" },
    { "title": "Fireboy and Watergirl", "description": "[Version: Forest Temple] [2 PLAYER] Control 2 characters to solve puzzles, avoid hazards, and reach the exit." },
    { "title": "Jetpack Joyride", "description": "The classic mobile hit - dodge obstacles and collect coins whilst flying a jetpack!" },
    { "title": "Temple Run 2", "description": "Endlessly run from a cursed temple, dodging obstacles and collecting coins." },
    { "title": "Super Stickman Golf", "description": "Aim, adjust power, and navigate tricky courses to sink the ball in as few shots as possible." },
    { "title": "Stick Duel Battle", "description": "[MULTIPLAYER] Use various weapons and physics-based movement to defeat each other." },
    { "title": "Little Master Cricket", "description": "Time your swings to hit the ball and score runs while avoiding getting out." },
    { "title": "A Dance of Fire and Ice", "description": "Guide two orbiting spheres along a winding path, tapping in sync with the beat to stay on track." },
    { "title": "2048 Multitasking", "description": "Classic 2048, but with multiples of 3 at the same time!" },
    { "title": "Backrooms 2D", "description": "[HORROR] The classic horror game - but now in 2D!" },
    { "title": "Backrooms", "description": "[HORROR] Navigate endless, maze-like rooms while avoiding entities and uncovering secret." },
    { "title": "Crazy Cattle 3D", "description": "Control a wild cow, running through fields, causing chaos, and collecting coins." },
    { "title": "Polytrack", "description": "[Version: 0.4.1] Speed through colourful, low-poly tracks, aiming for the fastest time while avoiding obstacles." },
    { "title": "Online Racing Game!", "description": "[MULTIPLAYER] Race your friends online to first to 3 laps!" },
    { "title": "Tanuki Sunset", "description": "Play as a raccoon drifting through vibrant cityscapes, collecting items and performing tricks." },
    { "title": "Quantum Chess", "description": "[2 PLAYER] Pieces in superposition. Every piece is a mystery." },
    { "title": "Electricman 2", "description": "Battle enemy squads using slow-motion combat moves, punches, and powerful electric attacks." },
    { "title": "Friday Night Funkin'", "description": "Face off in freestyle battles by hitting the arrow keys in sync with the beat to outplay your rivals!" },
    { "title": "Mr. Mine", "description": "[IFRAME] Dig deep into the earth, hire workers, upgrade equipment, and uncover hidden treasures." },
    { "title": "Shellshockers", "description": "[IFRAME] [MULTIPLAYER] Play as armed eggs battling other players in chaotic egg-citing combat." },
    { "title": "Sandboxels", "description": "A 2D physics sandbox game where you experiment with different elements, mix reactions, and create complex simulations." },
    { "title": "OvO", "description": "Navigate tricky levels with parkour and free-running skills. [MODDED]" },
    { "title": "Speed Stars", "description": "[IFRAME] Tap with precise timing to sprint, build momentum, and beat your best times." }
  ]
}
"""

# 3. The HTML template.
TEMPLATE_HTML = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" type="image/x-icon" href="../../assets/HydroSimple512.png">

    <meta property="og:image" content="../../assets/HydroSimple512.png">
    <meta property="og:site_name" content="Hydrovolter">

    <!-- CHANGE -->
    <title>[GAME_NAME]</title> <!-- GAME NAME GOES HERE -->
    <meta name="description" content="[GAME_DESCRIPTION_ESCAPED]"> <!-- GAME DESCRIPTION GOES HERE -->
    <meta property="og:description" content="[GAME_DESCRIPTION_ESCAPED]"> <!-- GAME DESCRIPTION GOES HERE-->
    <meta name="twitter:description" content="[GAME_DESCRIPTION_ESCAPED]"> <!-- GAME DESCRIPTION GOES HERE-->
    <meta property="og:title" content="[GAME_NAME]"> <!-- GAME NAME GOES HERE -->
    <meta name="twitter:title" content="[GAME_NAME]"> <!-- GAME NAME GOES HERE -->
    <meta property="og:url" content="https://hydrovolter.com/games/[FOLDER_NAME]/"> <!-- REPLACE THE LAST BIT WITH THE FOLDER NAME (LINK TO FOLDER)-->
    <link rel="canonical" href="https://hydrovolter.com/games/[FOLDER_NAME]/"> <!-- REPLACE THE LAST BIT WITH THE FOLDER NAME (LINK TO FOLDER)-->
    <!-- END CHANGE -->

    <meta name="keywords" content="hydrovolter,hydro,hydrovolt,hydrovoltexer,hydrocodez,hydroz,hydros,games,pages,dev,workers,unblocked,unblockedgames,ubg,free games,online games,bypassed games" />
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:type" content="game">
    <meta name="twitter:image:alt" content="Hydrovolter Logo">
    <meta content="width=device-width,height=device-height,initial-scale=1" name=viewport>
    <link href=/manifest.json rel=manifest>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="../css/games.css">

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PWJ73HJC1X"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-PWJ73HJC1X');
    </script>
    
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4732321347294671"
      crossorigin="anonymous"></script>
</head>
<body>

    <div class="game-page-wrapper">
        <!-- CHANGE -->
        <header class="game-header">
            <h1>[GAME_NAME]</h1> <!-- GAME NAME GOES HERE -->
            <p>[GAME_DESCRIPTION]</p> <!-- GAME DESCRIPTION GOES HERE-->
        </header>
        <!-- END CHANGE -->

        <main class="game-layout">
            <aside class="ad-container ad-left">
                <!-- Ad Unit #1 (Left) -->
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-4732321347294671"
                     data-ad-slot="5656112740"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </aside>

            <div class="game-main-content">
                <div class="game-iframe-container">
                    <iframe id="game-iframe" class="game-iframe" src="g/index.html" title="Game iFrame" allowfullscreen></iframe>
                </div>
                <div class="game-controls">
                    <span class="game-info">
                        <a href="../">← Back to Games</a>
                    </span>
                    <button id="fullscreen-btn">
                        <span>Fullscreen</span>
                        <svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg>
                    </button>
                </div>
            </div>

            <aside class="ad-container ad-right">
                <!-- Ad Unit #2 (Right) -->
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-4732321347294671"
                     data-ad-slot="2248184926"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </aside>
        </main>
    </div>

    <script src="../js/games.js" defer></script>
</body>
</html>
"""

# --- SCRIPT LOGIC ---

def process_directories():
    """
    Main function to iterate through directories and update index.html files.
    """
    # Load game data from the JSON string
    try:
        game_data = json.loads(GAMES_JSON_DATA)
        games_list = game_data.get("games", [])
    except json.JSONDecodeError:
        print("Error: Could not decode the JSON data. Please check its format.")
        return

    # Create a mapping of titles to game objects for easy lookup
    title_to_game_map = {game['title']: game for game in games_list}
    all_titles = list(title_to_game_map.keys())

    # Get the directory where the script is running
    script_dir = '.'
    
    print("Starting to process directories...")

    for dir_name in os.listdir(script_dir):
        dir_path = os.path.join(script_dir, dir_name)

        # 1. Check if it's a directory and not in the exclusion list
        if not os.path.isdir(dir_path) or dir_name in EXCLUDED_DIRS:
            continue
            
        # 2. Check if an index.html file exists inside
        index_file_path = os.path.join(dir_path, 'index.html')
        if not os.path.exists(index_file_path):
            print(f"--- Skipping '{dir_name}': No index.html found.")
            continue
            
        print(f"Processing directory: '{dir_name}'")

        # 3. Find the best matching game title for the directory name
        # The cutoff=0.6 means the names must be at least 60% similar
        matches = difflib.get_close_matches(dir_name, all_titles, n=1, cutoff=0.6)

        if not matches:
            print(f"!!! WARNING: Could not find a confident match for '{dir_name}'. Skipping.")
            continue
        
        matched_title = matches[0]
        game_info = title_to_game_map[matched_title]
        game_title = game_info['title']
        game_desc_raw = game_info['description']
        # Escape the description for meta tags to handle quotes and other special characters
        game_desc_escaped = html.escape(game_desc_raw, quote=True)
        
        print(f"  > Matched to game: '{game_title}'")
        
        # 4. Populate the template with the matched data
        new_html_content = TEMPLATE_HTML
        new_html_content = new_html_content.replace("[GAME_NAME]", game_title)
        new_html_content = new_html_content.replace("[GAME_DESCRIPTION_ESCAPED]", game_desc_escaped)
        new_html_content = new_html_content.replace("[GAME_DESCRIPTION]", game_desc_raw) # For the <p> tag
        new_html_content = new_html_content.replace("[FOLDER_NAME]", dir_name)
        
        # 5. Overwrite the index.html file
        try:
            with open(index_file_path, 'w', encoding='utf-8') as f:
                f.write(new_html_content)
            print(f"  > Successfully updated '{index_file_path}'")
        except IOError as e:
            print(f"  !!! ERROR: Could not write to file '{index_file_path}'. Reason: {e}")
        
    print("\nScript finished.")


if __name__ == "__main__":
    process_directories()