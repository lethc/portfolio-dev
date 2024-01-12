timeout(100, () => execAsync([
    'notify-send',
    'Notification Popup Example',
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing ' +
    'minim sint cillum sint consectetur cupidatat.',
    '-A', 'Cool!',
    '-i', 'info-symbolic',
]));
