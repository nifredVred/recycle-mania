
const Reactive = require('Reactive');
const Patches = require('Patches');

const scalar = Patches.getScalarValue('Number');
Patches.setStringValue('Text', scalar.toString());

const input1 = Patches.getScalarValue('Input1');
const input2 = Patches.getScalarValue('Input2');

Patches.getPulseValue('InPulse1').subscribe(function (){
    if (input1.lastValue==input2.lastValue)
        Patches.setPulseValue('Inc', Reactive.once());
    else 
        Patches.setPulseValue('Dec', Reactive.once());
    Patches.setPulseValue('Reset', Reactive.once());
});

Patches.getPulseValue('InPulse2').subscribe(function (){
    if (input1.lastValue==input2.lastValue)
        Patches.setPulseValue('Inc', Reactive.once());
    else 
        Patches.setPulseValue('Dec', Reactive.once());
    Patches.setPulseValue('Reset', Reactive.once());
});

Patches.getPulseValue('InPulse3').subscribe(function (){
    if (input1.lastValue==input2.lastValue)
        Patches.setPulseValue('Inc', Reactive.once());
    else 
        Patches.setPulseValue('Dec', Reactive.once());
    Patches.setPulseValue('Reset', Reactive.once());
});

Patches.getPulseValue('InPulse4').subscribe(function (){
    if (input1.lastValue==input2.lastValue)
        Patches.setPulseValue('Inc', Reactive.once());
    else 
        Patches.setPulseValue('Dec', Reactive.once());
    Patches.setPulseValue('Reset', Reactive.once());
});

