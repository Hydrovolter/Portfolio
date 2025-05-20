(function() {
    const links = [
    "./af.html",
    ];

      const today = new Date();
      if (today.getMonth() === 4 - 1 && today.getDate() === 1) { // .getMonth() === 4 - 1 , .getDate() === 1
        const randomLink = links[Math.floor(Math.random() * links.length)];
        window.location.href = randomLink;
      }
    })();