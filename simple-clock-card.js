class SimpleClockCard extends HTMLElement {

  setConfig(config) {
    this.config = config;
    if (this.config.use_military == null) this.config.use_military = true;
    if (this.config.hide_seconds == null) this.config.hide_seconds = false;
  }

  getCardSize() {
    return 1;
  }

  addZero(i){
    if (i < 10){
      i = "0" + i;
    }
    return i;
  }

  startTime() {
    var today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds(),
        p = ( h < 12 ) ? "AM" : "PM";

    m = this.addZero(m);
    s = this.addZero(s);

    let time_str =  (this.config.use_military ? h % 12 : h ) +
                    ":" +
                    m +
                    (this.config.hide_seconds ? "" : ":" + s ) +
                    (this.config.use_military ? " " + p : " ");

    this.content.innerHTML = time_str;

  }

  set hass(hass) {

    if (!this.content) {
      const card = document.createElement('HA-card');
      this.content = document.createElement('div');
      this.content.style.padding = '16px';
      this.content.style.fontSize = '4rem';
      this.style.textAlign = 'center';
      this.content.style.display = 'inline-block';
      card.appendChild(this.content);
      this.appendChild(card);
    }
    this.startTime();
    setInterval(this.startTime.bind(this), 250);
  }

}

customElements.define('simple-clock-card', SimpleClockCard);
