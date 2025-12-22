function isProperFraction(numerator, denominator, wholenumber = 0) {
     if (numerator < denominator && wholenumber === 0) {
      return true;
    } else if (numerator > denominator || numerator === denominator || wholenumber > 0) { 
      return false;
    }
    }

module.exports = isProperFraction;