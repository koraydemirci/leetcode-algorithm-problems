const reverse = num => {
    let rev = 0
    const maxInteger = 2 ** 31 - 1
    const minInteger = -(2 ** 31)
  
    while (num !== 0) {
      const pop = num % 10
      if (num > 0) {
        num = Math.floor(num / 10)
      } else {
        num = Math.ceil(num / 10)
      }
  
      if (rev > maxInteger / 10 || (rev === maxInteger / 10 && pop > 7)) {
        return 0
      }
  
      if (rev < minInteger / 10 || (rev === minInteger / 10 && pop < -8)) {
        return 0
      }
  
      rev = rev * 10 + pop
    }
  
    return rev
  }
  
//   console.log(reverse(1534236469))