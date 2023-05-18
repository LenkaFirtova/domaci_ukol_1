const renderReadEmails = (emails) => {
    const emailList = document.querySelector('#read');
    emailList.innerHTML = emails
      .map((email) => {
        return `
        <div class="email">
            <div class="email__head">
                <button class="email__icon email__icon--opened"></button>
                <div class="email__info">
                    <div class="email__sender">${email.sender.name}</div>
                    <div class="email__subject">${email.subject}</div>
                </div>
                <div class="email__time">${email.time}</div>
            </div>
            <div class="email__body"></div>
        </div>
        `;
      })
      .join('');
  };

  const renderUndreadEmails = (emails) => {
    const emailList = document.querySelector('#unread');
    emailList.innerHTML = emails
      .map((email) => {
        return `
        <div class="email">
            <div class="email__head">
                <button class="email__icon email__icon--closed"></button>
                <div class="email__info">
                    <div class="email__sender">${email.sender.name}</div>
                    <div class="email__subject">${email.subject}</div>
                </div>
                <div class="email__time">${email.time}</div>
            </div>
            <div class="email__body"></div>
        </div>
        `;
      })
      .join('');
  };


fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
.then((response) => response.json())
.then((data) => renderReadEmails(data.emails));

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
.then((response) => response.json())
.then((data) => renderUndreadEmails(data.emails));
