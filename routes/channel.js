var router = require('express').Router();
var channelController = require('../controllers/channel');

router.post('/:pubKey/:sats', channelController.openChannel);
router.get('/', channelController.getChannels);
router.post('/setfee/:id/:base?/:ppm?', channelController.setChannelFee);
router.delete('/:id/:force?/:timeout?', channelController.setChannelFee);

module.exports  = router;