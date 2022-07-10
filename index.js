// IN BASE AL MESE RITORNA IL NUMERO DI GIORNI DI QUEL MESE, PRENDE IN CARICO L'ANNO PER CALCOLARE FEBBRARIO SE BISESTILE O NO

const dayOfMonth = (month, year) => {
  switch (month) {
    case 11:
      return 30
    case 4:
      return 30
    case 6:
      return 30
    case 9:
      return 30
    case 2:
      let febDays = 28
      if (year % 4 === 0 && year !== 0) {
        febDays = 29
      }
      return febDays
    default:
      return 31
  }
}

// UNA VOLTA PASSATO IN INGRESSO UN ANNO RITORNA UN ARRAY CON TUTTE LE DATE DELLO STESSO
const allDayOfYear = (year) => {
  const allDays = []
  // LOOP DEI MESI
  for (let m = 1; m < 13; m++) {
    // LOOP DEI GIORNI
    for (let d = 1; d < (dayOfMonth(m, year) + 1); d++) {
      let days = d
      days < 10 ? days = "0" + days : days += ""
      let months = m
      months < 10 ? months = "0" + months : months += ""

      allDays.push(days + months + (year + ""))
    }
  }
  return allDays

}


const annoZero = () => {
  const annoZeroDates = allDayOfYear(0)
  const linguaggio = "linguaggio"
  // LONG DATES PRENDE LE SINGOLE DATE E NE RIPETE LE PRIME CIFRE FINO AD ARRIVARE ALLA LUNGHEZZA DI LINGUAGGIO
  let longDates = annoZeroDates.map(el => {
    let loopIndex = linguaggio.length - el.length
    for (let i = 0; i < loopIndex; i++) {
      el += el[i]
    }
    return el
  })

  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let encryptedWords = longDates.map(el => {
    let encryptedWord = ""
    for (let i = 0; i < el.length; i++) {
      let actualLangLetter = alphabet.indexOf(linguaggio[i])
      let alphabetIndex = alphabet[actualLangLetter + Number(el[i])]

      encryptedWord += alphabetIndex
    }
    return encryptedWord
  })

  encryptedWords.map(el=> {
    const container = document.getElementById('lang')
    container.innerHTML += `<div class="divlang"><p>${el}</p></div>`
  })
}
annoZero()



