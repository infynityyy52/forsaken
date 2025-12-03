//let password = prompt("Введи пароль:");
//if (password === "1") {
//    alert("Доступ разрешен!");
//} else {
//    alert("Неверный пароль!");
//    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
//}

                       function togglePlayPause() {
    if (currentMusic) {
        if (isPlaying) {
            currentMusic.pause();
            isPlaying = false;
            document.getElementById('playPauseBtn').innerHTML = '▶️';
            updatePlayingStatus('На паузе');
        } else {
            currentMusic.play();
            isPlaying = true;
            document.getElementById('playPauseBtn').innerHTML = '⏸️';
            updatePlayingStatus(document.getElementById('miniTrackName').textContent);
        }
    }
}

   function showMiniPlayer(title) {
    document.getElementById('miniTrackName').textContent = title;
    document.getElementById('miniPlayer').style.display = 'block';
    document.getElementById('playPauseBtn').innerHTML = '⏸️';
    document.getElementById('sectionsButton').classList.add('player-active');

    if (!document.getElementById('loopBtn')) {
        let loopBtn = document.createElement('button');
        loopBtn.id = 'loopBtn';
        loopBtn.innerHTML = '🔁';
        loopBtn.onclick = toggleLoop;
        loopBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            margin-left: 5px;
        `;
        document.getElementById('miniPlayer').appendChild(loopBtn);
    }

    if (!document.getElementById('randomBtn')) {
        let randomBtn = document.createElement('button');
        randomBtn.id = 'randomBtn';
        randomBtn.innerHTML = '🎲';
        randomBtn.onclick = playRandomTrack;
        randomBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            margin-left: 5px;
        `;
        document.getElementById('miniPlayer').appendChild(randomBtn);
    }
}

const allTracks = [
    {name: 'Now run', file: 'a_grave_soul.mp3'},
    {name: 'Meet your making(old)', file: 'meet_your_making.mp3'},
    {name: 'PLEAD', file: 'PLEAD.mp3'},
    {name: 'Creation of hatred', file: 'creation_of_hatred.mp3'},
    {name: 'Through Patches Of Violet', file: 'patch_violet.mp3'},
    {name: 'SMILE', file: 'SMILE.mpeg'},
    {name: 'Burnout', file: 'burnout.mpeg'},
    {name: 'Compass', file: 'compass.mp3'},
    {name: 'Close To Me', file: 'close_to_me.mpeg'},
    {name: 'Vanity(remix)', file: 'vanity.mpeg'},
    {name: 'Dead Ringer', file: 'dead_ringer.mpeg'}
    // добавь остальные треки...
];

function playRandomTrack() {
    if (allTracks.length > 0) {
        let randomIndex = Math.floor(Math.random() * allTracks.length);
        let randomTrack = allTracks[randomIndex];
        playTrack(randomTrack.file, randomTrack.name);
    }
}

function hideMiniPlayer() {
    document.getElementById('miniPlayer').style.display = 'none';
    document.getElementById('sectionsButton').classList.remove('player-active');
}

function stopMusic() {
    if (currentMusic) {
        currentMusic.pause();
        currentMusic = null;
        isPlaying = false;
        updatePlayingStatus('Ничего');
        hideMiniPlayer();
    }
}

let currentMusic = null;
let isPlaying = false;

function toggleLoop() {
    if (currentMusic) {
        isLooping = !isLooping;
        currentMusic.loop = isLooping;
        
        let loopBtn = document.getElementById('loopBtn');
        if (isLooping) {
            loopBtn.style.color = '#ff6b6b';
        } else {
            loopBtn.style.color = 'white';
        }
    }
}

function playTrack(filename, title) {
    if (currentMusic) {
        currentMusic.pause();
        currentMusic.currentTime = 0;
    }
    
    currentMusic = new Audio(filename);
    currentMusic.volume = 0.5;
    currentMusic.loop = isLooping; // ПРИМЕНЯЕМ LOOP
    currentMusic.play();
    isPlaying = true;
    
    updatePlayingStatus(title);
    showMiniPlayer(title);
    
    currentMusic.addEventListener('ended', function() {
        if (!isLooping) { // только если не зациклен
            isPlaying = false;
            updatePlayingStatus('Ничего');
            hideMiniPlayer();
        }
    });
}

function closeMiniPlayer() {
    stopMusic();
    hideMiniPlayer();
}

function closeMusicCatalog() {
    document.getElementById('musicCatalog').style.display = 'none';
}

function stopMusic() {
    if (currentMusic) {
        currentMusic.pause();
        currentMusic.currentTime = 0;
        isPlaying = false;
        updatePlayingStatus('Ничего');
    }
}

function updatePlayingStatus(title) {
    let element = document.getElementById('currentTrack');
    if (element) {
        element.textContent = title;
    }
    
    // Обновляем мини-плеер тоже
    let miniPlayer = document.getElementById('miniTrackName');
    if (miniPlayer) {
        miniPlayer.textContent = title;
    }
}

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

let musicButton = document.getElementById('musicBtn');

function closeModal() {
    document.body.style.overflow = "auto";
    let modal = document.getElementById('factModal');
    let modalContent = modal.querySelector('.modal-content');
    
    modalContent.classList.add('modal-disappear');
    modal.style.background = 'rgba(0, 0, 0, 0)';
    modal.style.transition = 'background 0.3s ease';
    
    setTimeout(function() {
        modal.style.display = 'none';
        modal.style.background = 'rgba(0, 0, 0, 0.8)';
        modalContent.classList.remove('modal-disappear');
    }, 300);
}
                        function openSection(sectionName) {
    closeSections();
    
    switch(sectionName) {
        case 'characters':
            alert("Тех. работы!")
            break;
        case 'tapes':
             alert("Тех. работы!")
            break;
        case 'chapters':
            showChaptersSection();
            break;
        case 'gallery':
            showGallerySection();
            break;
        case 'music':
            showMusicSection();
            break;
        case 'games':
            showGamesSection();
            break;
} 
                        }
function showGallerySection() {
    document.body.style.overflow = 'hidden';
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 95%; max-height: 85%; overflow-y: auto; position: relative;">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = 'auto';" style="position: sticky; top: 10px; z-index: 9999;">&times;</button>
            <h3>🖼️ Галерея Poppy Playtime</h3>
            
            <div style="
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 15px;
                padding: 20px 0;
            ">
                <div class="gallery-item">
                    <img src="" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 10px; cursor: pointer;" onclick="openFullImage(this.src)">
                </div>
                
                <img src="" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 10px; cursor: pointer;" onclick="openFullImage(this.src)">

                <img src="" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 10px; cursor: pointer;" onclick="openFullImage(this.src)">
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function openFullImage(src) {
    let fullImageModal = document.createElement('div');
    fullImageModal.className = 'modal';
    fullImageModal.style.display = 'block';
    fullImageModal.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; background: rgba(0,0,0,0.9);" onclick="this.parentElement.remove()">
            <img src="${src}" style="max-width: 90%; max-height: 90%; object-fit: contain;">
        </div>
    `;
    document.body.appendChild(fullImageModal);
}

    function closeCharacters() {
    document.body.style.overflow = 'auto';
    let modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (modal.innerHTML.includes('Персонажи Poppy Playtime')) {
            modal.remove();
        }
    });
}

function openSections() {
    document.body.style.overflow = 'hidden';
    
    let modal = document.getElementById('sectionsModal');
    if (modal) {
        modal.style.display = 'block';
    } else {
        alert('Элемент sectionsModal не найден! Перезагрузи страницу.');
    }
}

function closeSections() {
    document.body.style.overflow = 'auto';
    
    let modal = document.getElementById('sectionsModal');
    if (modal) {
        modal.style.display = 'none'; // СКРЫВАЕМ, а не удаляем!
    }
}


function showChaptersSection() {
    document.body.style.overflow = 'hidden';
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 90%; max-height: 80%; overflow-y: auto; position: relative;">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = 'auto';" style="position: sticky; top: 10px; z-index: 9999;">&times;</button>
            <h3>📖 Лор Forsaken</h3>
            
            <div style="
                padding: 20px 0;
                text-align: left;
                line-height: 1.6;
            ">

            <h2></h2>
                <p></p>
            <h2></h2>
                <p></p>
                <h2></h2>
                <p></p>
                </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function showCharactersSection() {
    document.body.style.overflow = 'hidden';
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 90%; max-height: 80%;">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = 'auto';">&times;</button>
            <h3>👹 Персонажи Forsaken</h3>
            
            <div style="
                display: flex; 
                gap: 20px; 
                overflow-x: auto; 
                padding: 20px 0;
                scroll-behavior: smooth;
                scrollbar-width: thin;
            ">
                <div class="character-card">
    <img src="" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
    <h4></h4>
    <p></p>
    <small>Глава 1 • Эксперимент 1170 • "Обними меня!"</small>
</div>

<div class="character-card">
    <img src="" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
    <h4></h4>
    <p>Розовая паучиха с растягивающимися конечностями на несколько метров. Мари Пейн была сотрудницей Playtime Co, которую превратили в игрушку против её воли. Обожает игры, но делает их смертельными. Заставляет игрока проходить три мини-игры на Game Station: Музыкальную память, Шлёпни-Вагги и лабиринт. Ненавидит читеров и жестоко наказывает за нарушение правил. Была убита в шредере, но Прототип забрал её останки.</p>
    <small>Глава 2 • Мари Пейн • "Давай поиграем!"</small>
</div>

<div class="character-card">
    <img src="" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
    <h4></h4>
    <p>Фиолетовый кот-гигант, выделяющий "красный дым" — усыпляющий газ из своего рта. Теодор Грэмбелл был одним из детей в приюте, который стал фанатичным слугой Прототипа, считая его богом. Охраняет детский сад Playtime Co и контролирует мини-игрушки Smiling Critters. Может передвигаться бесшумно и появляться из ниоткуда. Был убит Прототипом после поражения от игрока — его "бог" предал его в последний момент.</p>
    <small>Глава 3 • Теодор Грэмбелл • "Время спать..."</small>
</div>

<div class="character-card">
    <img src="" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
    <h4></h4>
    <p>Первая говорящая кукла Playtime Co с рыжими волосами и голубыми глазами. Была заперта в стеклянном футляре 10 лет после "Часа Радости". Кажется милой и благодарной союзницей, но на самом деле манипулирует игроком для достижения своих целей. Хочет уничтожить Прототипа любой ценой и готова пожертвовать кем угодно. В конце 2 главы предает игрока, направив поезд не к выходу, а глубже в фабрику. Обладает сверхъестественным интеллектом и знает больше, чем говорит.</p>
    <small>Все главы • "Идеальная" кукла • "Я Поппи!"</small>
</div>

<div class="character-card">
    <img src="" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
    <h4></h4>
    <p>Розовая "сестра" Huggy Wuggy с такими же длинными руками и большим ростом. В отличие от своего синего "брата", сохранила дружелюбный характер и помогает игроку в критические моменты. Носит красную помаду и имеет более женственный вид. Спасает игрока от падения в конце 2 главы и помогает в навигации по фабрике. В конце 3 главы на неё нападает неизвестный враг, оставляя её судьбу неясной. Возможно, единственная игрушка, сохранившая человечность.</p>
    <small>Глава 2-3 • Эксперимент 1222 • Верный союзник</small>
</div>

<div class="character-card">
    <img src="" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
    <h4></h4>
    <p>Бывший лидер Smiling Critters, оранжевый пес-солнце с солнечным ожерельем. Единственный выживший из восьми членов группы, но в ужасном состоянии — нижняя половина тела съедена мини-игрушками, которые теперь используют его как "костюм". Несмотря на мучения, сохраняет рассудок и предупреждает игрока об опасности. Называет игрока "ангелом Поппи" и умоляет его бежать. В конце концов теряет контроль, когда мини-игрушки полностью овладевают им.</p>
    <small>Глава 3 • Последний из Smiling Critters • "Беги!"</small>
</div>

<div class="character-card">
    <img src="" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
    <h4></h4>
    <p>Учительница школы в детском саду с фарфоровым лицом и светлыми волосами. Единственная выжившая из целой группы учительниц, которых съела от голода после того, как еда закончилась. Сошла с ума от одиночества, каннибализма и чувства вины. Разговаривает сама с собой и ведет воображаемые уроки. Обладает уникальной способностью — замирает и "притворяется мертвой", если на неё пристально смотреть. Вооружена острым указателем и крайне опасна в темноте.</p>
    <small>Глава 3 • Школа • "Не двигайся..."</small>
</div>
                
<div class="character-card">
<img src="" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
<h4></h4>
<p>Эксперимент 1-0-0-6. Главный антагонист всей серии. Прототип самая нераскрытая личность во всей игре. Появлялся достаточно много раз, но не контактировал с игроком, и на то есть своя причина. В 4 главе, Харли Сойер(Доктор) рассказывает нам о нас. И в его монологе нечайно выпригивает фраза:"Значит это ты смесь того, чего боится Прототип?"․ Из этого мы можем сделать вывод, что Прототип боится игрока, ну или просто делает вид. Но его поведение непредсказуемо. Например в конце 2 главы, своей клешнёй он достаёт останки Мамочки. Но на нас не обращает никакого внимания. Или например в конце 3 главы, он убивает CatNapа и опять, забирает его труп, при этом не смотря на то что игрок в этот момент был даже ослаблен.</p>
<small>Все главы • "Бог" игрушек</small>
</div>
</div>
</div>
    `;
    document.body.appendChild(modal);
}

document.getElementById('sectionsButton').style.display = 'block';

function showMusicSection() {
    document.body.style.overflow = 'hidden';
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 90%; max-height: 80%;">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = 'auto';">&times;</button>
            <h3>🎵 Музыкальный каталог</h3>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; padding: 20px 0;">
                
                <div class="section-card" onclick="openMusicCategory('chase')">
                    <img src="chase_music.png">
                    <h4>🏃‍♂️ Чейзы</h4>
                    <p>Музыка погони</p>
                </div>
                
                <div class="section-card" onclick="openMusicCategory('lms')">
                    <img src="taph_lms.png">
                    <h4>🎵 LMS</h4>
                    <p>Основные треки</p>
                </div>
                
                <div class="section-card" onclick="openMusicCategory('ambient')">
                    <img src="ambient.jpg">
                    <h4>🎧 Фоновая</h4>
                    <p>Атмосферная музыка</p>
                </div>
                
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function openMusicCategory(category) {
    document.body.style.overflow = 'hidden';
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    let title = '';
    let tracks = [];
    
    switch(category) {
        case 'chase':
            title = '🏃‍♂️ Чейзы';
            tracks = [
                {name: 'Chase Theme 1', file: 'chase1.mp3'},
                {name: 'Chase Theme 2', file: 'chase2.mp3'}
            ];
            break;
        case 'lms':
            title = '🎵 LMS';
            tracks = [
                {name: 'Now run', file: 'a_grave_soul.mp3'},
                {name: 'Meet your making(old)', file: 'meet_your_making.mp3'},
                {name: 'PLEAD', file: 'PLEAD.mp3'},
                {name: 'Creation of hatred', file: 'creation_of_hatred.mp3'},
                {name: 'Through Patches Of Violet', file: 'patch_violet.mp3'},
                {name: 'SMILE', file: 'SMILE.mpeg'},
                {name: 'Burnout', file: 'burnout.mpeg'},
                {name: 'Compass', file: 'compass.mp3'},
                {name: 'Close To Me', file: 'close_to_me.mpeg'},
                {name: 'Vanity(remix)', file: 'vanity.mpeg'},
                {name: 'Dead Ringer', file: 'dead_ringer.mpeg'}
            ];
            break;
        case 'ambient':
            title = '🎧 Фоновая';
            tracks = [
                {name: 'Ambient 1', file: 'ambient1.mp3'},
                {name: 'Ambient 2', file: 'ambient2.mp3'}
            ];
            break;
    }
    
    let tracksHTML = tracks.map(track => 
        `<div class="music-item" onclick="playTrack('${track.file}', '${track.name}')">
            <span>🎵 ${track.name}</span>
            <button>▶️</button>
        </div>`
    ).join('');
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = 'auto';">&times;</button>
            <h3>${title}</h3>
            <div class="music-list">
                ${tracksHTML}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

let bossHP = 100000;
let clicks = 100;
let damage = 1;

                // Переменные для магазина
let upgrades = {
    damage: { level: 1, cost: 10, multiplier: 1 },
    autoClick: { level: 0, cost: 50, dps: 0 },
    critChance: { level: 0, cost: 100, chance: 0 }
};

function attackBoss() {
    bossHP -= damage;
    clicks++;
    
    document.getElementById('bossHP').textContent = bossHP;
    document.getElementById('clicks').textContent = clicks;
    
    if (bossHP <= 0) {
        alert('🎉 1x1x1x1 УБИТ! ПОБЕДА!');
        resetGame();
    }
}

function resetGame() {
    bossHP = 100000;
    clicks = 0;
    damage = 1;
    updateUI();
}

function updateUI() {
    document.getElementById('bossHP').textContent = bossHP;
    document.getElementById('clicks').textContent = clicks;
    document.getElementById('damage').textContent = damage;
}

function showGamesSection() {
    document.body.style.overflow = 'hidden';
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = 'auto';">&times;</button>
            <h3>🎮 Выберите мини-игру</h3>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 20px 0;">
                
                <div class="section-card" onclick="openGame('boss')">
                    <img src="1x1x1x1.jpg" alt="Босс" style="width: 80px; height: 80px; border-radius: 10px;">
                    <h4>💀 Убей 1x1x1x1</h4>
                    <p>Кликер-босс файт</p>
                </div>
                
                <div class="section-card" onclick="openGame('td')">
                    <img src="second_game.jpg">
                    <h4>🏰 Tower Defense</h4>
                    <p>Защищай от армии Форсакена!</p>
                </div>
                
                <div class="section-card" onclick="openGame('tetris')">
                    <h4>🧩 Тетрис</h4>
                    <p>Складывай блоки</p>
                </div>
                
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function openGame(gameType) {
    let modals = document.querySelectorAll('.modal');
    modals.forEach(m => {
        if (m.id !== 'sectionsModal') {
            m.remove();
        }
    });
    
    switch(gameType) {
        case 'boss':
            showBossGame();
            break;
        case 'td':
            showTowerDefense();
            break;
        case 'tetris':
            alert('🧩 Тетрис в разработке!');
            break;
    }
}


function moveBoss() {
    let boss = document.getElementById('boss');
    if (boss) {
        let x = Math.random() * 720;
        let y = Math.random() * 520;
        
        boss.style.left = x + 'px';
        boss.style.top = y + 'px';
    }
}

setInterval(moveBoss, 2000);

function buyUpgrade(type) {
    if (clicks >= upgrades[type].cost) {
        clicks -= upgrades[type].cost;
        upgrades[type].level++;
        
        if (type === 'damage') {
            damage++;
            upgrades[type].cost = Math.floor(upgrades[type].cost * 1.5);
        }
        else if (type === 'autoClick') {
            upgrades[type].dps += 1;
            upgrades[type].cost = Math.floor(upgrades[type].cost * 2);
            startAutoClick();
        }
        else if (type === 'critChance') {
            upgrades[type].chance += 10; // +10% крит шанс
            upgrades[type].cost = Math.floor(upgrades[type].cost * 3);
        }
        
        updateUI();
        updateShopButtons();
    }
}

// Автоклик
function startAutoClick() {
    if (!window.autoClickInterval && upgrades.autoClick.dps > 0) {
        window.autoClickInterval = setInterval(() => {
            if (bossHP > 0) {
                bossHP -= upgrades.autoClick.dps;
                updateUI();
                if (bossHP <= 0) {
                    alert('🎉 1x1x1x1 УБИТ! ПОБЕДА!');
                    resetGame();
                }
            }
        }, 1000);
    }
}


function attackBoss() {
    let finalDamage = damage;
    let bonusClicks = 1; // обычно +1 клик
    
    // Проверка на крит
    if (Math.random() * 100 < upgrades.critChance.chance) {
        finalDamage *= 2;
        bonusClicks = 5; // КРИТ = +5 кликов!
        showCritEffect();
    }
    
    bossHP -= finalDamage;
    clicks += bonusClicks;
    
    updateUI();
    
    if (bossHP <= 0) {
        alert('🎉 1x1x1x1 УБИТ! ПОБЕДА!');
        resetGame();
    }
}

function showCritEffect() {
    let boss = document.getElementById('boss');
    if (boss) {
        boss.style.filter = 'brightness(2) saturate(2)';
        setTimeout(() => {
            boss.style.filter = 'none';
        }, 200);
    }
}

function openShop() {
    let shopModal = document.createElement('div');
    shopModal.className = 'modal';
    shopModal.style.display = 'block';
    shopModal.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove();">&times;</button>
            <h3>🛒 Магазин апгрейдов</h3>
            
            <div style="margin: 10px 0;">
                <button onclick="buyUpgrade('damage')" style="width: 100%; padding: 10px;">
                    ⚔️ +1 Урон (${upgrades.damage.cost} кликов)
                </button>
            </div>
            
            <div style="margin: 10px 0;">
                <button onclick="buyUpgrade('autoClick')" style="width: 100%; padding: 10px;">
                    🤖 Автоклик (${upgrades.autoClick.cost} кликов)
                </button>
            </div>

            <div style="margin: 10px 0;">
    <button onclick="buyUpgrade('critChance')" style="width: 100%; padding: 10px;">
        💥 +10% Крит (${upgrades.critChance.cost} кликов)
    </button>
</div>
        </div>
    `;
    document.body.appendChild(shopModal);
}

function showCritEffect() {
    let boss = document.getElementById('boss');
    if (boss) {
        
        boss.style.filter = 'brightness(3) saturate(3) hue-rotate(0deg)';
        boss.style.transform = 'scale(1.2)';
        boss.style.boxShadow = '0 0 20px red';
       
        let critText = document.createElement('div');
        critText.textContent = 'CRIT!';
        critText.style.cssText = `
            position: absolute;
            left: ${boss.offsetLeft + 40}px;
            top: ${boss.offsetTop - 30}px;
            color: red;
            font-size: 24px;
            font-weight: bold;
            text-shadow: 2px 2px 4px black;
            pointer-events: none;
            z-index: 9999;
            animation: critFloat 1s ease-out forwards;
        `;
        
        document.getElementById('gameArea').appendChild(critText);
        
        setTimeout(() => {
            boss.style.filter = 'none';
            boss.style.transform = 'scale(1)';
            boss.style.boxShadow = 'none';
            critText.remove();
        }, 500);
    }
}

// Сохранение игры
function saveGame() {
    let gameData = {
        bossHP: bossHP,
        clicks: clicks,
        damage: damage,
        upgrades: upgrades
    };
    localStorage.setItem('forsaken_game', JSON.stringify(gameData));
}

// Загрузка игры
function loadGame() {
    let saved = localStorage.getItem('forsaken_game');
    if (saved) {
        let gameData = JSON.parse(saved);
        bossHP = gameData.bossHP;
        clicks = gameData.clicks;
        damage = gameData.damage;
        upgrades = gameData.upgrades;
        updateUI();
        startAutoClick();
    }
}

// Новая игра
function newGame() {
    bossHP = 100000;
    clicks = 0;
    damage = 1;
    upgrades = {
        damage: { level: 1, cost: 10, multiplier: 1 },
        autoClick: { level: 0, cost: 50, dps: 0 },
        critChance: { level: 0, cost: 100, chance: 0 }
    };
    if (window.autoClickInterval) {
        clearInterval(window.autoClickInterval);
        window.autoClickInterval = null;
    }
    updateUI();
    saveGame();
} 

function showBossGame() {
    document.body.style.overflow = 'hidden';
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 90%; max-height: 85%; overflow-y: auto;">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = 'auto';">&times;</button>
            <h3>💀 Убей 1x1x1x1</h3>
            
            <div id="gameArea" style="position: relative; width: 800px; height: 600px; border: 2px solid #ff6b6b; margin: 20px auto; background: #1a1a1a; overflow: hidden;">
                
                <img id="boss" onclick="attackBoss()" src="1x1x1x1.jpg" style="position: absolute; width: 80px; height: 80px; cursor: crosshair; left: 360px; top: 260px; border-radius: 5px; border: 2px solid red; user-select: none;">
                
                <div style="position: absolute; top: 10px; left: 10px; color: white; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px;">
                    <div>💚 HP: <span id="bossHP">100000</span></div>
                    <div>💰 Клики: <span id="clicks">0</span></div>
                    <div>⚔️ Урон: <span id="damage">1</span></div>
                </div>
                
                <div style="position: absolute; top: 10px; right: 10px;">
                    <button onclick="openShop()" style="padding: 10px; background: #ff6b6b; color: white; border: none; border-radius: 5px;">🛒 Магазин</button>
                </div>
                
                <div style="position: absolute; bottom: 10px; left: 10px;">
                    <button onclick="saveGame()" style="margin: 2px; padding: 5px; background: #4CAF50; color: white; border: none; border-radius: 3px;">💾 Сохранить</button>
                    <button onclick="loadGame()" style="margin: 2px; padding: 5px; background: #2196F3; color: white; border: none; border-radius: 3px;">📁 Загрузить</button>
                    <button onclick="newGame()" style="margin: 2px; padding: 5px; background: #FF9800; color: white; border: none; border-radius: 3px;">🆕 Новая игра</button>
                </div>
                
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    loadGame();
}

function showTowerDefense() {
    tdMoney = 100;
    tdLives = 2;
    tdWave = 1;
    enemies = [];
    towers = [];
    expectedEnemies = 0;
    
    document.body.style.overflow = 'hidden';
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 90%; max-height: 85%; overflow: auto; position: relative;">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = 'auto';">&times;</button>
            <h3>🏰 Tower Defense - Форсакен</h3>
            
            <div id="tdGame" style="width: 800px; height: 600px; background: #2d2d2d; position: relative; margin: 20px auto; border: 2px solid #ff6b6b;">
                
                <!-- Тропа для врагов -->
                <div id="enemyPath" style="position: absolute; width: 600px; height: 50px; background: #8B4513; top: 275px; left: 100px; border-radius: 25px;"></div>
                
                <!-- UI панель -->
                <div style="position: absolute; top: 10px; left: 10px; color: white; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px; z-index: 10;">
                    <div>💰 Деньги: <span id="money">100</span></div>
                    <div>❤️ Жизни: <span id="lives">2</span></div>
                    <div>🌊 Волна: <span id="wave">1</span></div>
                </div>
                
                <!-- Кнопка старта -->
                <div style="position: absolute; bottom: 10px; right: 10px;">
                    <button id="startBtn" onclick="startWave()" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; font-size: 16px;">
                        ▶️ Начать волну 1
                    </button>
                </div>
                
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    setTimeout(() => setupTowerPlacement(), 100);
}

//ПЕРЕМЕННЫЕ ТД <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let tdMoney = 100;
let tdLives = 2;
let tdWave = 1;
let enemies = [];
let towers = [];
let expectedEnemies = 0; // сколько врагов должно появиться в волне
let enemyTypes = {
    slasher: { hp: 100, speed: 2, reward: 20, image: 'slasher.jpg' },
    coolkid: { hp: 750, speed: 2, reward: 100, image: 'coolkid.jpg' },
    coolkid_minion: { hp: 100, speed: 2.5, reward: 25, image: 'coolkid_minion.jpg' },
    johndoe: { hp: 150, speed: 3, reward: 25, image: 'john_doe.jpg' },
    nolik: { hp: 250, speed: 2, reward: 40, image: 'nolik.jpg' },
    guest666: { hp: 400, speed: 2.5, reward: 50, image: 'guest666.jpg' },
    boss1x: { hp: 25000, speed: 0.5, reward: 0, image: '1x1x1x1.jpg' },
    boss1x_minion: { hp: 350, speed: 2.5, reward: 75, image: 'oi_oi.jpg' }
};
let isFinalWave = false;

function startWave() {
    let btn = document.getElementById('startBtn');
    btn.disabled = true;
    btn.textContent = '⏳ Волна идет...';
    
    createEnemiesForWave(tdWave);
    
    if (!window.tdInterval) {
        window.tdInterval = setInterval(moveEnemies, 50);
    }
    
function startTowerShooting() {
    if (!window.towerInterval) {
        window.towerInterval = setInterval(() => {
            towers.forEach(tower => {
                if (tower.type !== 'guest') { // гость не стреляет
                    shootFromTower(tower);
                }
            });
        }, 100);
    }
}

    // Запускаем стрельбу башен
    startTowerShooting();
}

function spawnEnemy(type, count) {
    for(let i = 0; i < count; i++) {
        setTimeout(() => {
            createEnemy(type);
        }, i * 1000); // каждую секунду новый враг
    }
}

function createEnemy(type) {
    let enemyData = enemyTypes[type];
    let enemy = {
        id: Date.now() + Math.random(),
        type: type,
        hp: enemyData.hp,
        maxHp: enemyData.hp,
        speed: enemyData.speed,
        reward: enemyData.reward,
        x: 100,
        y: 275,
        element: null
    };
    
    // Карта картинок
    let imageMap = {
        'slasher': 'slasher.jpg',
        'coolkid': 'coolkid.jpg',
        'coolkid_minion': 'coolkid_minion.jpg',
        'johndoe': 'john_doe.jpg',
        'nolik': 'nolik.jpg',
        'guest666': 'guest666.jpg',
        'boss1x': '1x1x1x1.jpg',
        'boss1x_minion': 'oi_oi.jpg'
    };
    
    // Создаем HTML элемент врага
    let enemyDiv = document.createElement('div');
    enemyDiv.id = 'enemy_' + enemy.id;
    enemyDiv.innerHTML = `<img src="${imageMap[type]}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
    enemyDiv.style.cssText = `
        position: absolute;
        width: 40px;
        height: 40px;
        left: ${enemy.x}px;
        top: ${enemy.y}px;
        border: 2px solid white;
        border-radius: 50%;
        cursor: pointer;
    `;
    
    enemy.element = enemyDiv;
    enemies.push(enemy);
    
    document.getElementById('tdGame').appendChild(enemyDiv);
}

function moveEnemies() {
    console.log('=== НАЧАЛО moveEnemies ===');
    console.log('Врагов в массиве:', enemies.length);
    console.log('Ожидается врагов:', expectedEnemies);
    
    enemies.forEach(enemy => {
        if (enemy.element) {
            // Проверяем блокировку гостями
            let blocked = false;
            towers.forEach(tower => {
                if (tower.type === 'guest') {
                    let distance = Math.abs(enemy.x - tower.x);
                    if (distance < 30) {
                        blocked = true;
                    }
                }
            });
            
            if (!blocked) {
                enemy.x += enemy.speed;
                enemy.element.style.left = enemy.x + 'px';
            }
            
            if (enemy.x > 700) {
                tdLives--;
                removeEnemy(enemy);
                updateTDUI();
            }
        }
    }); 

     console.log('=== ПОСЛЕ forEach ===');
    console.log('Врагов в массиве:', enemies.length);
    console.log('Ожидается врагов:', expectedEnemies);
    
    // ПРОВЕРКА ОКОНЧАНИЯ ВОЛНЫ ПОСЛЕ ДВИЖЕНИЯ ВРАГОВ:
    if (enemies.length === 0 && expectedEnemies === 0) {
        console.log('🎉 ВОЛНА ЗАКОНЧЕНА!');
        clearInterval(window.tdInterval);
        window.tdInterval = null;
        
        if (window.towerInterval) {
            clearInterval(window.towerInterval);
            window.towerInterval = null;
        }
        
        let btn = document.getElementById('startBtn');
        if (btn) {
            btn.disabled = false;
            btn.textContent = `▶️ Начать волну ${tdWave + 1}`;
        }

        tdWave++;

      } else {
        console.log('❌ Волна НЕ закончена');
    }
}

function removeEnemy(enemy) {
    console.log('Убиваем врага, expectedEnemies было:', expectedEnemies);
    
    if (enemy.element) {
        enemy.element.remove();
    }

     if (!enemies.includes(enemy)) {
        console.log('⚠️ Враг уже был удален!');
        return; // не уменьшаем expectedEnemies повторно
    }

    enemies = enemies.filter(e => e.id !== enemy.id);
    expectedEnemies--;
    
    console.log('expectedEnemies стало:', expectedEnemies);
}

function updateTDUI() {
    document.getElementById('money').textContent = tdMoney;
    document.getElementById('lives').textContent = tdLives;
    document.getElementById('wave').textContent = tdWave;

    if (tdLives <= 0) {
        setTimeout(() => gameOver(), 100); // небольшая задержка
        return; // ПРЕРЫВАЕМ ВЫПОЛНЕНИЕ
    }
}

let towerTypes = {
    shedletsky: { 
        name: 'Шедлетский',
        damage: 25, 
        range: 120, 
        fireRate: 1000, 
        cost: 50, 
        color: '#4CAF50',
        emoji: '🔫'
    },
    shansik: { 
        name: 'Шанс',
        damage: 250, 
        range: 800, // вся карта
        fireRate: 8000, // 10 секунд
        cost: 250, 
        color: '#FF5722',
        emoji: '🎯'
    },
    guest: { 
        name: 'Гость',
        damage: 0, 
        range: 0, 
        fireRate: 0, 
        cost: 100, 
        color: '#9C27B0',
        emoji: '🚧',
        lifetime: 10000 // 5 секунд
    },
    dussekar: {
        name: 'Дуссекар',
        damage: 10,
        range: 800,
        fireRate: 2500,
        cost: 350,
        color: '#40E0D0',
        emoji: '🎃'
    }
};

// Меню выбора башни
function showTowerMenu(x, y) {
    let menu = document.createElement('div');
    menu.id = 'towerMenu';
    menu.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        background: rgba(0,0,0,0.9);
        border: 2px solid #ff6b6b;
        border-radius: 10px;
        padding: 10px;
        z-index: 100;
    `;
    
    Object.keys(towerTypes).forEach(type => {
        let tower = towerTypes[type];
        let btn = document.createElement('button');
        btn.textContent = `${tower.emoji} ${tower.name} (${tower.cost}₸)`;
        btn.style.cssText = `
            display: block;
            width: 100%;
            margin: 5px 0;
            padding: 8px;
            background: ${tower.color};
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        `;
        btn.onclick = () => {
            placeTower(type, x, y);
            menu.remove();
        };
        menu.appendChild(btn);
    });
    
    // Кнопка отмены
    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = '❌ Отмена';
    cancelBtn.style.cssText = `
        display: block;
        width: 100%;
        margin: 5px 0;
        padding: 8px;
        background: #666;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    cancelBtn.onclick = () => menu.remove();
    menu.appendChild(cancelBtn);
    
    document.getElementById('tdGame').appendChild(menu);
}

function removeTower(tower) {
    if (tower.element) {
        tower.element.remove();
    }
    towers = towers.filter(t => t.id !== tower.id);
}

function placeTower(type, x, y) {
    let towerData = towerTypes[type];
    
    if (tdMoney >= towerData.cost) {
        // Проверки для гостя и обычных башен
        if (type === 'guest') {
            if (y < 275 || y > 325) {
                alert('Гостя можно ставить только на тропу!');
                return;
            }
        } else {
            if (y >= 275 && y <= 325) {
                alert('Башню нельзя ставить на тропу!');
                return;
            }
        }
        
        tdMoney -= towerData.cost;
        
        let tower = {
            id: Date.now() + Math.random(),
            type: type,
            x: x - 20,
            y: y - 20,
            damage: towerData.damage,
            range: towerData.range,
            fireRate: towerData.fireRate,
            lastShot: 0,
            element: null
        };
        
        // Создаем HTML элемент башни
        let towerDiv = document.createElement('div');
        towerDiv.innerHTML = `<img src="${type}.jpg" style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px;">`;
        towerDiv.style.cssText = `
            position: absolute;
            width: 40px;
            height: 40px;
            background: ${towerData.color};
            left: ${tower.x}px;
            top: ${tower.y}px;
            border-radius: 8px;
            border: 2px solid white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        `;
        
        tower.element = towerDiv;
        towers.push(tower);
        
        document.getElementById('tdGame').appendChild(towerDiv);
        
        // Особая логика для гостя
        if (type === 'guest') {
            setTimeout(() => {
                removeTower(tower);
            }, towerData.lifetime);
        }
        
        updateTDUI();
    } else {
        alert('Недостаточно денег!');
    }
}

// Система стрельбы башен
function shootFromTower(tower) {
      console.log('Стреляет башня:', tower.type);
    let now = Date.now();
    if (now - tower.lastShot < tower.fireRate) return;
    
    // ОСОБАЯ ЛОГИКА ДЛЯ ДУССЕКАРА:
    if (tower.type === 'dussekar') {
    tower.lastShot = now;
    
    // Бьем ВСЕХ врагов на поле
    enemies.forEach(enemy => {
        damageEnemy(enemy, tower.damage);
    });
    
    // Анимация башни
    tower.element.style.transform = 'scale(1.5)';
    tower.element.style.filter = 'brightness(2)';
    setTimeout(() => {
        tower.element.style.transform = 'scale(1)';
        tower.element.style.filter = 'brightness(1)';
    }, 300);
    
    // СВЕТОВАЯ ВОЛНА ПО ТРОПЕ:
    let pathEffect = document.createElement('div');
    pathEffect.style.cssText = `
        position: absolute;
        width: 600px;
        height: 50px;
        background: linear-gradient(90deg, transparent, #00ffff, transparent);
        top: 275px;
        left: 100px;
        border-radius: 25px;
        z-index: 100;
        opacity: 0.8;
        animation: pulse 0.5s ease-out;
    `;
    
    document.getElementById('tdGame').appendChild(pathEffect);
    
    // Удаляем эффект через 0.5 секунды
    setTimeout(() => pathEffect.remove(), 500);
    
    return;
}
    
    // Обычная логика для других башен:
    let target = findNearestEnemy(tower);
    if (target) {
        tower.lastShot = now;
        
        animateTowerShoot(tower, target);
        
        setTimeout(() => {
            damageEnemy(target, tower.damage);
        }, 200);
    }
}

function findNearestEnemy(tower) {
    let nearest = null;
    let minDistance = tower.range;
    
    enemies.forEach(enemy => {
        let distance = Math.sqrt(
            Math.pow(enemy.x - tower.x, 2) + 
            Math.pow(enemy.y - tower.y, 2)
        );
        
        if (distance < minDistance) {
            nearest = enemy;
            minDistance = distance;
        }
    });
    
    return nearest;
}

function animateTowerShoot(tower, target) {
    // Анимация башни
    tower.element.style.transform = 'scale(1.3)';
    tower.element.style.filter = 'brightness(1.5)';
    
    // Создаем пулю
    let bullet = document.createElement('div');
    bullet.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: yellow;
        border-radius: 50%;
        left: ${tower.x + 20}px;
        top: ${tower.y + 20}px;
        z-index: 50;
        box-shadow: 0 0 10px yellow;
    `;
    
    document.getElementById('tdGame').appendChild(bullet);
    
    // Анимация полета пули
    let startX = tower.x + 20;
    let startY = tower.y + 20;
    let endX = target.x + 15;
    let endY = target.y + 15;
    
    let duration = 200;
    let startTime = Date.now();
    
    function moveBullet() {
        let elapsed = Date.now() - startTime;
        let progress = elapsed / duration;
        
        if (progress >= 1) {
            bullet.remove();
            // Возвращаем башню в нормальное состояние
            tower.element.style.transform = 'scale(1)';
            tower.element.style.filter = 'brightness(1)';
            return;
        }
        
        let currentX = startX + (endX - startX) * progress;
        let currentY = startY + (endY - startY) * progress;
        
        bullet.style.left = currentX + 'px';
        bullet.style.top = currentY + 'px';
        
        requestAnimationFrame(moveBullet);
    }
    
    moveBullet();
}

function damageEnemy(enemy, damage) {
    // ПРОВЕРКА: враг уже мертв?
    if (enemy.hp <= 0) {
        return; // не наносим урон мертвому врагу
    }
    
    enemy.hp -= damage;
    
    // Анимация получения урона
    enemy.element.style.filter = 'brightness(2) saturate(2)';
    setTimeout(() => {
        if (enemy.element) {
            enemy.element.style.filter = 'brightness(1) saturate(1)';
        }
    }, 150);
    
    if (enemy.hp <= 0) {
        // ОСОБАЯ ЛОГИКА ДЛЯ ФИНАЛЬНОГО БОССА:
        if (enemy.type === 'boss1x' && isFinalWave) {
            // БОСС УБИТ - КОНЕЦ ИГРЫ!
            isFinalWave = false;
            clearInterval(window.infiniteSpawnInterval);
            
            // Останавливаем все интервалы
            clearInterval(window.tdInterval);
            window.tdInterval = null;
            
            if (window.towerInterval) {
                clearInterval(window.towerInterval);
                window.towerInterval = null;
            }
            
            // ЭПИЧНЫЙ ВИЗУАЛЬНЫЙ ЭФФЕКТ:
            let victoryEffect = document.createElement('div');
            victoryEffect.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: radial-gradient(circle, rgba(255,0,0,0.8) 0%, rgba(255,255,255,0.6) 50%, transparent 100%);
                z-index: 9999;
                pointer-events: none;
                animation: victoryFlash 2s ease-out forwards;
            `;
            
            document.body.appendChild(victoryEffect);
            
            // Убираем всех оставшихся врагов с анимацией
            enemies.forEach(e => {
                if (e.element) {
                    e.element.style.animation = 'enemyDissolve 1s ease-out forwards';
                    setTimeout(() => e.element.remove(), 1000);
                }
            });
            enemies = [];
            expectedEnemies = 0;
            
            // Обновляем UI как победа
            let btn = document.getElementById('startBtn');
            if (btn) {
                btn.disabled = false;
                btn.textContent = '🎉 ИГРА ПРОЙДЕНА!';
                btn.onclick = () => location.reload();
            }
            
            // Показываем сообщение победы через 1 секунду
            setTimeout(() => {
                alert('🎉 1x1x1x1 УБИТ! ВЫ ПОБЕДИЛИ!');
                victoryEffect.remove();
            }, 1000);
            
            return;
        }
        
        tdMoney += enemy.reward;
        removeEnemy(enemy);
        updateTDUI();
    }
}

function setupTowerPlacement() {
    document.getElementById('tdGame').addEventListener('click', function(e) {
        let oldMenu = document.getElementById('towerMenu');
        if (oldMenu) {
            oldMenu.remove();
            return;
        }
        
        let rect = this.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        // Показываем меню ВСЕГДА
        showTowerMenu(x, y);
    });
} 

function resetGame() {

    // Убираем всех врагов с поля
    enemies.forEach(e => {
        if (e.element) e.element.remove();
    });
    
    // Убираем все башни с поля  
    towers.forEach(t => {
        if (t.element) t.element.remove();
    });

    tdMoney = 100;
    tdLives = 2;
    tdWave = 1;
    enemies = [];
    towers = [];
    expectedEnemies = 0;
    isFinalWave = false;
    
    // Останавливаем все интервалы
    if (window.tdInterval) {
        clearInterval(window.tdInterval);
        window.tdInterval = null;
    }
    if (window.towerInterval) {
        clearInterval(window.towerInterval);
        window.towerInterval = null;
    }
    
    updateTDUI();
    
    let btn = document.getElementById('startBtn');
    if (btn) {
        btn.disabled = false;
        btn.textContent = '▶️ Начать волну 1';
    }
}

function gameOver() {
    if (tdLives <= 0) {
        // ОСТАНАВЛИВАЕМ ВСЕ ИНТЕРВАЛЫ:
        clearInterval(window.tdInterval);
        window.tdInterval = null;
        
        if (window.towerInterval) {
            clearInterval(window.towerInterval);
            window.towerInterval = null;
        }
        
        alert("💀 Поражение...");
        
        // СБРОС ИГРЫ:
        resetGame();
    }
}

function createEnemiesForWave(wave) {
    expectedEnemies = 0; // сброс счетчика

    switch(wave) {
        case 1:
            expectedEnemies = 5;
        spawnEnemy('slasher', 5);
          break;
        case 2:
            expectedEnemies = 10;
        spawnEnemy('slasher', 10);
          break;
        case 3:
            expectedEnemies = 10;
        spawnEnemy('slasher', 5);
        setTimeout(() => spawnEnemy('johndoe', 5), 5000);  
          break;
        case 4:
            expectedEnemies = 13;
        setTimeout(() => spawnEnemy('coolkid_minion', 10), 4500);
        spawnEnemy('slasher', 3);
          break;
        case 5:
            expectedEnemies = 16;
        spawnEnemy('coolkid_minion', 15);
        setTimeout(() => spawnEnemy('coolkid', 1), 15000);  
          break;
        case 6:
            expectedEnemies = 15;
        setTimeout(() => spawnEnemy('nolik', 5), 11000);
        spawnEnemy('johndoe', 10);
          break;
        case 7:
            expectedEnemies = 15;
        spawnEnemy('nolik', 15);
          break;
        case 8:
            expectedEnemies = 20;
        setTimeout(() => spawnEnemy('guest666', 5), 15000);
        spawnEnemy('nolik', 15);
          break;
        case 9:
            expectedEnemies = 15;
        spawnEnemy('guest666', 15);
          break;
        case 10:
            expectedEnemies = 15;
        spawnEnemy('guest666', 10);
        setTimeout(() => spawnEnemy('boss1x_minion', 5), 10000);
          break;
        case 11:
            expectedEnemies = 20;
        spawnEnemy('boss1x_minion', 20);
          break;
        case 12:
        let sukunaSound = new Audio('sukuna.mp3');
        sukunaSound.volume = 0.7; // громкость 70%
        sukunaSound.play();

        alert("Final wave")
        isFinalWave = true;
            expectedEnemies = 69993;
        spawnEnemy('slasher', 9999);
        setTimeout(() => spawnEnemy('johndoe', 9999), 1000);
        setTimeout(() => spawnEnemy('coolkid_minion', 9999), 1200);
        setTimeout(() => spawnEnemy('coolkid', 9999), 8000);
        setTimeout(() => spawnEnemy('nolik', 9999), 1500);
        setTimeout(() => spawnEnemy('guest666', 9999), 2500);
        setTimeout(() => spawnEnemy('boss1x_minion', 9999), 5000);
        setTimeout(() => spawnEnemy('boss1x', 1), 15000);
          break;
    }
}

let isLooping = false;

function toggleLoop() {
    if (currentMusic) {
        isLooping = !isLooping;
        currentMusic.loop = isLooping;
        
        let loopBtn = document.getElementById('loopBtn');
        if (isLooping) {
            loopBtn.style.color = '#ff6b6b'; // красный когда включен
            loopBtn.innerHTML = '🔁';
        } else {
            loopBtn.style.color = 'white';
            loopBtn.innerHTML = '🔁';
        }
    }
}

function showCardGame() {
    let cardMoney = 0;
    let collection = {};
    let clickPower = 1;
    let totalClicks = 0;
    
    document.body.style.overflow = 'hidden';
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 95%; max-height: 90%; overflow-y: auto; position: relative;">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = 'auto';">&times;</button>
            <h3>🃏 Карточная Рулетка Шанса</h3>
            
            <!-- Статистика -->
            <div style="display: flex; gap: 20px; margin: 20px 0; flex-wrap: wrap;">
                <div style="background: rgba(0,0,0,0.7); padding: 15px; border-radius: 10px; color: white;">
                    <div>🪙 Монеты: <span id="cardMoney">0</span></div>
                    <div>📦 Карт собрано: <span id="cardsCollected">0</span>/220</div>
                    <div>👆 Всего кликов: <span id="totalClicks">0</span></div>
                    <div>⚡ Сила клика: <span id="clickPower">1</span></div>
                </div>
            </div>
            
            <!-- Кликер -->
            <div style="text-align: center; margin: 30px 0; position: relative;" id="clickerArea">
                <button id="clickButton" onclick="clickForMoney()" style="
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border: 5px solid #FFD700;
                    background: linear-gradient(45deg, #FFD700, #FFA500);
                    color: #000;
                    font-size: 24px;
                    font-weight: bold;
                    cursor: pointer;
                    box-shadow: 0 0 30px #FFD70080;
                    transition: transform 0.1s;
                " onmousedown="this.style.transform='scale(0.95)'" onmouseup="this.style.transform='scale(1)'">
                    🪙<br>КЛИК!
                </button>
                <div style="margin-top: 10px; color: #ccc;">Кликай для получения монет!</div>
            </div>
            
            <!-- Магазин апгрейдов -->
            <div style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 10px; margin: 20px 0;">
                <h4 style="color: white; margin-top: 0;">🛒 Апгрейды</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <button onclick="buyUpgrade('power')" id="powerUpgrade" style="padding: 10px; background: #4CAF50; color: white; border: none; border-radius: 5px;">
                        ⚡ +1 Сила клика (100 монет)
                    </button>
                    <button onclick="buyUpgrade('auto')" id="autoUpgrade" style="padding: 10px; background: #2196F3; color: white; border: none; border-radius: 5px;">
                        🤖 Авто-клик (500 монет)
                    </button>
                </div>
            </div>
            
            <!-- Паки -->
            <div style="display: flex; gap: 15px; margin: 20px 0; flex-wrap: wrap;">
                <button onclick="openPack('basic')" style="padding: 15px 25px; background: #4CAF50; color: white; border: none; border-radius: 8px; font-size: 16px;">
                    📦 Базовый пак<br>10 карт - 50 монет
                </button>
                <button onclick="openPack('premium')" style="padding: 15px 25px; background: #FF6B6B; color: white; border: none; border-radius: 8px; font-size: 16px;">
                    🎁 Премиум пак<br>10 карт - 200 монет<br><small>(лучшие шансы!)</small>
                </button>
                <button onclick="openPack('mega')" style="padding: 15px 25px; background: #9C27B0; color: white; border: none; border-radius: 8px; font-size: 16px;">
                    💎 Мега пак<br>20 карт - 500 монет<br><small>(гарантированная редкая!)</small>
                </button>
            </div>
            
            <!-- Результат открытия -->
            <div id="cardResult" style="min-height: 200px; background: #2d2d2d; border-radius: 10px; padding: 20px; margin: 20px 0;">
                <p style="color: #ccc; text-align: center;">Кликай для получения монет, затем покупай паки!</p>
            </div>
            
            <div style="display: flex; gap: 10px;">
                <button onclick="showCollection()" style="padding: 10px 20px; background: #9C27B0; color: white; border: none; border-radius: 5px;">
                    📚 Моя коллекция
                </button>
                <button onclick="saveProgress()" style="padding: 10px 20px; background: #FF9800; color: white; border: none; border-radius: 5px;">
                    💾 Сохранить
                </button>
                <button onclick="loadProgress()" style="padding: 10px 20px; background: #607D8B; color: white; border: none; border-radius: 5px;">
                    📁 Загрузить
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    loadProgress(); // Загружаем сохраненный прогресс
}

// Система редкости с улучшенными шансами
const rarities = {
    common: { name: 'Common', color: '#808080', chance: 35, glow: false },
    uncommon: { name: 'Uncommon', color: '#00FF00', chance: 25, glow: false },
    rare: { name: 'Rare', color: '#0080FF', chance: 15, glow: true },
    superrare: { name: 'Super Rare', color: '#8000FF', chance: 10, glow: true },
    epic: { name: 'Epic', color: '#FF00FF', chance: 6, glow: true },
    epicplus: { name: 'Epic+', color: '#FF0080', chance: 4, glow: true },
    mythic: { name: 'Mythic', color: '#FF8000', chance: 2.5, glow: true },
    mythicplus: { name: 'Mythic+', color: '#FF4000', chance: 1.5, glow: true },
    legendary: { name: 'Legendary', color: '#FFD700', chance: 0.7, glow: true },
    legendaryplus: { name: 'Legendary+', color: '#FFA500', chance: 0.2, glow: true },
    s: { name: 'S', color: '#FF0000', chance: 0.08, glow: true },
    splus: { name: 'S+', color: '#8B0000', chance: 0.02, glow: true },
    ssplus: { name: 'SS+', color: '#000000', chance: 0.005, glow: true }
};

// База карт (примеры - добавишь остальные)
const cardDatabase = [
    // SS+ (2 карты)
    { id: 1, name: '1x1x1x1 Ultimate', rarity: 'ssplus', image: '1x1x1x1.jpg' },
    { id: 2, name: 'Forsaken God', rarity: 'ssplus', image: 'forsaken_god.jpg' },
    
    // S+ 
    { id: 3, name: 'Shadow 1x1x1x1', rarity: 'splus', image: '1x1x1x1_shadow.jpg' },
    { id: 4, name: 'Chaos Master', rarity: 'splus', image: 'chaos_master.jpg' },
    { id: 5, name: 'Void Slasher', rarity: 'splus', image: 'slasher_void.jpg' },
    
    // S
    { id: 6, name: 'Golden 1x1x1x1', rarity: 's', image: '1x1x1x1_gold.jpg' },
    { id: 7, name: 'Diamond Slasher', rarity: 's', image: 'slasher_diamond.jpg' },
    
    // Legendary+
    { id: 8, name: 'Royal Slasher', rarity: 'legendaryplus', image: 'slasher_royal.jpg' },
    { id: 9, name: 'Ancient Coolkid', rarity: 'legendaryplus', image: 'coolkid_ancient.jpg' },
    
    // Legendary
    { id: 10, name: 'Fire Slasher', rarity: 'legendary', image: 'slasher_fire.jpg' },
    { id: 11, name: 'Ice Coolkid', rarity: 'legendary', image: 'coolkid_ice.jpg' },
    { id: 12, name: 'Lightning Nolik', rarity: 'legendary', image: 'nolik_lightning.jpg' },
    
    // Добавь остальные карты до 220...
    // Для примера добавлю несколько обычных
    { id: 50, name: 'Basic Slasher', rarity: 'common', image: 'slasher.jpg' },
    { id: 51, name: 'Basic Coolkid', rarity: 'common', image: 'coolkid.jpg' },
    { id: 52, name: 'Basic Nolik', rarity: 'common', image: 'nolik.jpg' },
    { id: 53, name: 'Basic Guest666', rarity: 'uncommon', image: 'guest666.jpg' },
    { id: 54, name: 'Basic John Doe', rarity: 'uncommon', image: 'john_doe.jpg' }
];

let autoClickInterval = null;
let hasAutoClick = false;

function clickForMoney() {
    cardMoney += clickPower;
    totalClicks++;
    
    updateUI();
    createClickAnimation();
}

function createClickAnimation() {
    let clickArea = document.getElementById('clickerArea');
    let animation = document.createElement('div');
    animation.textContent = `+${clickPower}`;
    animation.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100 + 50}px;
        top: 50px;
        color: #FFD700;
        font-weight: bold;
        font-size: 20px;
        pointer-events: none;
        z-index: 1000;
        animation: floatUp 1s ease-out forwards;
    `;
    
    clickArea.appendChild(animation);
    
    setTimeout(() => animation.remove(), 1000);
}

// CSS анимация для летящих монет
if (!document.getElementById('cardGameCSS')) {
    let style = document.createElement('style');
    style.id = 'cardGameCSS';
    style.textContent = `
        @keyframes floatUp {
            0% { opacity: 1; transform: translateY(0px); }
            100% { opacity: 0; transform: translateY(-50px); }
        }
        
        @keyframes cardGlow {
            0%, 100% { box-shadow: 0 0 20px currentColor; }
            50% { box-shadow: 0 0 40px currentColor, 0 0 60px currentColor; }
        }
        
        .rare-card {
            animation: cardGlow 2s infinite;
        }
        
        @keyframes confetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-200px) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

function buyUpgrade(type) {
    if (type === 'power') {
        let cost = 100 * clickPower;
        if (cardMoney >= cost) {
            cardMoney -= cost;
            clickPower++;
            updateUI();
            alert(`⚡ Сила клика увеличена! Теперь +${clickPower} за клик`);
        } else {
            alert('Недостаточно монет!');
        }
    } else if (type === 'auto') {
        if (!hasAutoClick && cardMoney >= 500) {
            cardMoney -= 500;
            hasAutoClick = true;
            startAutoClick();
            updateUI();
            alert('🤖 Авто-клик активирован!');
        } else if (hasAutoClick) {
            alert('Авто-клик уже куплен!');
        } else {
            alert('Недостаточно монет!');
        }
    }
}

function startAutoClick() {
    if (!autoClickInterval) {
        autoClickInterval = setInterval(() => {
            cardMoney += Math.floor(clickPower / 2);
            updateUI();
        }, 1000);
    }
}

function updateUI() {
    document.getElementById('cardMoney').textContent = cardMoney;
    document.getElementById('cardsCollected').textContent = Object.keys(collection).length;
    document.getElementById('totalClicks').textContent = totalClicks;
    document.getElementById('clickPower').textContent = clickPower;
    
    // Обновляем цены апгрейдов
    let powerBtn = document.getElementById('powerUpgrade');
    if (powerBtn) {
        powerBtn.textContent = `⚡ +1 Сила клика (${100 * clickPower} монет)`;
    }
    
    let autoBtn = document.getElementById('autoUpgrade');
    if (autoBtn && hasAutoClick) {
        autoBtn.textContent = '🤖 Авто-клик (КУПЛЕН)';
        autoBtn.disabled = true;
        autoBtn.style.background = '#666';
    }
}

function getRandomCard(packType = 'basic') {
    let random = Math.random() * 100;
    let currentChance = 0;
    
    // Бонусы для разных паков
    let rarityBonus = 1;
    if (packType === 'premium') rarityBonus = 1.5;
    if (packType === 'mega') rarityBonus = 2;
    
    for (let rarityKey in rarities) {
        let adjustedChance = rarities[rarityKey].chance * rarityBonus;
        currentChance += adjustedChance;
        if (random <= currentChance) {
            let cardsOfR