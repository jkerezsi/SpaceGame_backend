import checkSettingsField from '../../services/settings-service/settings-service';

const settings = (req, res) => {
  checkSettingsField(req.body.name)
    .then(data => res.status(200).json(data))
    .catch((err) => {
        res.status(400).json(err.message);
      });
};

module.exports = {
  settings,
};
