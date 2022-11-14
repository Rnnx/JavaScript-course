const mark = {
    fullName: 'Mark Wahlberg',
    weight: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }
}

const john = {
    fullName: 'John Travolta',
    weight: 92,
    height: 1.95,

    calcBMI: function() {
        this['bmi'] = this.weight / (this.height * this.height)
        return this['bmi']
    }
}

console.log(`${mark['calcBMI']() > john.calcBMI() ? `Mark's BMI (${mark.calcBMI()}) is higher than John's (${john['calcBMI']()}).` : `John's BMI (${john.calcBMI()}) is higher than Mark's (${mark['calcBMI']()}).`}`)