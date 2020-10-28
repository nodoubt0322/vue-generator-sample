const { notEmpty } = require('../utils.js');

module.exports = {
  description: 'generate a view',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'view name please',
      validate: notEmpty('name')
    }
  ],
  actions: data => {
    const name = '{{name}}';
    const actions = [
      {
        type: 'add',
        path: `src/views/${name}/index.vue`,
        templateFile: 'plop-templates/view/index.hbs',
        data: {
          name
        }
      }
    ];

    return actions;
  }
};
