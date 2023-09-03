/** @type {import('plop').NodePlopAPI} */
export default function (plop) {
  plop.setPartial('formProvider', '{{ pascalCase name }}FormProvider');
  plop.setPartial('formContext', 'use{{ pascalCase name }}FormContext');
  plop.setPartial('formUse', 'use{{ pascalCase name }}Form');
  plop.setGenerator('form', { // オプション名になる
    description: 'form新規作成',
    prompts: [
      // {
      //   type: 'input',
      //   name: 'path',
      //   default: 'src/features/',
      //   message: 'component path (e.g. src/features/):'
      // },
      {
        type: 'input',
        name: 'name',
        message: 'component name:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{snakeCase name}}/Form.tsx',
        templateFile: 'plop-template/form/component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/features/{{snakeCase name}}/{{ pascalCase name }}Context.ts',
        templateFile: 'plop-template/form/context.ts.hbs'
      }
    ]
  });
}
