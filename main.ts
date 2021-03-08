let sæt_venstre_detektor = 0
let sæt_højre_detektor = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    let højre_detektor = 0
    let venstre_detektor = 0
    sæt_højre_detektor = pins.digitalReadPin(DigitalPin.P1)
    sæt_venstre_detektor = pins.digitalReadPin(DigitalPin.P2)
    if (venstre_detektor == 1 && højre_detektor == 1) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 50)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 50)
    } else if (venstre_detektor == 0 && højre_detektor == 0) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 10)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 10)
    } else {
        music.playMelody("C - - - - C C D ", music.volume())
    }
})
