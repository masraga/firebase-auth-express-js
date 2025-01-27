export default (lang: string="") => {
  const listLang: any = {
    /** firebase lang */
    "auth/email-already-exists": "Email sudah digunakan oleh akun lain",
    "auth/id-token-expired": "Token sudah expired silahkan login ulang",
    "auth/invalid-email": "Format email salah",
    "auth/invalid-email-verified": "Email belum di verifikasi",
    "auth/internal-error": "Terjadi kesalahan, silahkan coba lagi",
    "auth/invalid-password": "Password minimal 6 karakter",
  }

  if(typeof listLang[lang] == "undefined"){
    return listLang["auth/internal-error"]
  }
  else {

    return listLang[lang]
  }
}