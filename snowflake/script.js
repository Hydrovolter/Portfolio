window.onload = () => {
    input.oninput = () => {
      const { value } = input;
      if (!value) {
        history.replaceState(null, "", "/snowflake");
        result.innerText = "";
        return;
      }
  
      if (!+value || value < 4194304 || value > 9223372036854775807) {
        history.replaceState(null, "", "/snowflake");
        result.style.color = "#ED4245";
        result.innerText = "Invalid Snowflake";
        return;
      }
  
      result.style.color = "#57F287";
      result.innerText = new Date(
        value / 4194304 + 1420070400000
      ).toLocaleString();
  
      history.replaceState(null, "", "/snowflake/" + value);
    };
  
    input.onpaste = () => input.focus();
  
    const q = location.pathname.slice(11);
    if (q) {
      input.value = q;
      input.focus();
      input.oninput();
    }
  };