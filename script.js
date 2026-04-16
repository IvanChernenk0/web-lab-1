document.addEventListener('DOMContentLoaded', () => {
  const browserData = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
  };

  localStorage.setItem('os_browser_info', JSON.stringify(browserData));

  const storedData = JSON.parse(localStorage.getItem('os_browser_info'));

  const footer = document.querySelector('footer');
  const infoSection = document.createElement('section');
  infoSection.style.fontSize = '0.8em';
  infoSection.style.color = '#555';

  infoSection.innerHTML = `
        <h3>Системна інформація</h3>
        <ul id="storage-info">
            <li><strong>Браузер:</strong> ${storedData.userAgent}</li>
            <li><strong>Платформа:</strong> ${storedData.platform}</li>
            <li><strong>Екран:</strong> ${storedData.screenWidth}x${storedData.screenHeight}</li>
        </ul>
    `;

  footer.appendChild(infoSection);
});

document.addEventListener('DOMContentLoaded', () => {
  const url = `https://jsonplaceholder.typicode.com/posts/31/comments`;
  const container = document.getElementById('comments-container');

  async function fetchComments() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Помилка завантаження');

      const comments = await response.json();
      container.innerHTML = '';
      comments.forEach((comment) => {
        const commentElement = document.createElement('article');
        commentElement.style.marginBottom = '30px';
        commentElement.style.padding = '20px';
        commentElement.style.borderLeft = '4px solid var(--earth-orange)';
        commentElement.style.backgroundColor = 'rgba(221, 161, 94, 0.05)';

        commentElement.innerHTML = `
                    <h4 style="color: var(--earth-orange); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">
                        ${comment.name}
                    </h4>
                    <span style="font-size: 0.9rem; color: var(--army-green); font-weight: bold; display: block; margin-bottom: 10px;">
                        ${comment.email}
                    </span>
                    <p style="font-style: italic; color: var(--dark-forest);">
                        "${comment.body}"
                    </p>
                `;

        container.appendChild(commentElement);
      });
    } catch (error) {
      container.innerHTML = `<p style="color: red;">Не вдалося завантажити коментарі: ${error.message}</p>`;
    }
  }

  fetchComments();
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.querySelector('.close-button');
  const showModal = () => {
    modal.style.display = 'flex';
  };

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  setTimeout(showModal, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;

  const checkTimeAndSetTheme = () => {
    const hour = new Date().getHours();

    if (hour >= 7 && hour < 21) {
      body.classList.remove('dark-theme');
      console.log('Автоматично встановлено денну тему');
    } else {
      body.classList.add('dark-theme');
      console.log('Автоматично встановлено нічну тему');
    }
  };

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
  });

  checkTimeAndSetTheme();
});
