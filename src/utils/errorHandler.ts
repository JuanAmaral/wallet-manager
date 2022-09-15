

const handleError = (status?: number, detail?: string) => {

    if (status == 401) {
        alert("Erro 401: Sessão expirada");
    }
    if (status == 403) {
        alert("Erro 403: Sessão expirada");
    }
    if (detail) {
        alert(detail);
    } else {
        alert

            ('Erro Interno. Tente novamente mais tarde.');
    }
}

export default handleError;