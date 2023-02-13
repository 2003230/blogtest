function fallApart() {
  const header = document.querySelector('header');
  header.innerHTML = '';
  const headerText = header.textContent;
  header.style.display = 'flex';
  header.style.flexWrap = 'wrap';
  for (let i = 0; i < headerText.length; i++) {
    const char = headerText[i];
    const charDiv = document.createElement('div');
    charDiv.textContent = char;
    charDiv.style.position = 'relative';
    charDiv.style.transform = `translateY(${Math.random() * 100}%)`;
    header.appendChild(charDiv);
  }
}
