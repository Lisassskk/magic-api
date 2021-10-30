export default {
    editor: {
        base: 'vs-dark',
        rules: [
            {foreground: 'A9B7C6'},
            {token: 'keywords', foreground: 'CC7832', fontStyle: 'bold'},
            {token: 'keyword', foreground: 'CC7832', fontStyle: 'bold'},
            {token: 'number', foreground: '6897BB'},
            {token: 'string', foreground: '6A8759', fontStyle: 'bold'},
            {token: 'string.sql', foreground: '6A8759'},
            {token: 'tag.sql', foreground: 'E8BF6A'},
            {token: 'attribute.name.sql', foreground: 'BABABA'},
            {token: 'attribute.value.sql', foreground: '6A8759'},
            {token: 'predefined.sql', foreground: 'A9B7C6', fontStyle: 'italic'},
            {token: 'predefined.magicscript', foreground: 'A9B7C6', fontStyle: 'italic'},
            {token: 'key', foreground: '9876AA'},
            {token: 'string.key.json', foreground: '9876AA'},
            {token: 'string.value.json', foreground: '6A8759'},
            {token: 'keyword.json', foreground: '6897BB'},
            {token: 'operator.sql', foreground: 'CC7832', fontStyle: 'bold'},
            {token: 'string.invalid', foreground: '008000', background: 'FFCCCC'},
            {token: 'string.escape.invalid', foreground: '008000', background: 'FFCCCC'},
            {token: 'string.escape', foreground: '000080', fontStyle: 'bold'},
            {token: 'comment', foreground: '808080', fontStyle: 'italic'},
            {token: 'comment.doc', foreground: '629755', fontStyle: 'italic'},
            {token: 'comment.todo', foreground: 'A8C023', fontStyle: 'italic'},
            {token: 'string.escape', foreground: 'CC7832'}
        ],
        colors: {
            'editor.background': '#2B2B2B',
            'editorLineNumber.foreground': '#999999',	//行号的颜色
            'editorGutter.background': '#313335',	//行号背景色
            'editor.lineHighlightBackground': '#323232',	//光标所在行的颜色
            'dropdown.background': '#3C3F41',	//右键菜单
            'dropdown.foreground': '#BBBBBB',	//右键菜单文字颜色
            'list.activeSelectionBackground': '#4B6EAF',	//右键菜单悬浮背景色
            'list.activeSelectionForeground': '#FFFFFF',	//右键菜单悬浮文字颜色
        }
    },
    styles: {
        'background': '#3C3F41',
        'toolbox-background': '#3C3F41',
        'middle-background': '#313335',
        'middle-border': '#323232',
        'selected-background': '#323232',
        'hover-background': '#353739',
        'selected-color': '#fff',
        'color': '#bbb',
        'icon-color': '#AFB1B3',
        'header-title-color': '#bbb',
        'header-version-color': '#999',
        'header-default-color': '#AFB1B3',
        'button-hover-background': '#2D2F30',
        'border-color': '#323232',
        'toolbox-list-label-color': '#bbb',
        'toolbox-list-span-color': '#787878',
        'toolbox-border-color': '#323232',
        'toolbox-list-hover-background': '#0D293E',
        'toolbox-border-right-color': '#555555',
        'footer-border-color': '#323232',
        'tab-bar-border-color': '#323232',
        'input-border-color': '#646464',
        'input-border-foucs-color': '#3D6185',
        'input-background': '#45494A',
        'empty-background': '#282828',
        'empty-key-color': '#489DF6',
        'empty-color': '#A0A0A0',
        'dialog-border-color': '#282828',
        'dialog-shadow-color': '#151515',
        'dialog-button-hover-background': '#365880',
        'dialog-button-hover-border-color': '#43688C',
        'dialog-button-background': '#4C5052',
        'dialog-button-border': '#5E6060',
        'table-col-border-color': '#333638',
        'table-row-border-color': '#333638',
        'table-hover-background': '#4B6EAF',
        'debug-line-background': '#2D6099',
        'breakpoints-background': '#C75450',
        'breakpoint-line-background': '#3a2323',
        'table-even-background': '#414547',
        'button-disabled-background': '#5A5A5A',
        'select-background': '#3C3F41',
        'select-hover-background': '#3C3F41',
        'select-option-background': '#3C3F41',
        'select-option-hover-background': '#4B6EAF',
        'select-inputable-background': '#45494a',
        'select-inputable-border': 'transparent',
        'toolbox-list-header-icon-color': '#AFB1B3',
        'checkbox-background': '#43494A',
        'checkbox-border': '#6B6B6B',
        'checkbox-text-color': '#bbb',
        'checkbox-selected-background': '#43494A',
        'checkbox-selected-border': '#6B6B6B',
        'todo-color': '#A8C023',
        'log-error-color': '#CC666E',
        'text-string-color': '#6A8759',
        'text-number-color': '#6897BB',
        'text-boolean-color': '#CC7832',
        'text-property-color': '#9876aa',
        'text-key-color': '#9876aa',
        'suggest-hover-background': '#113A5C',
        'suggest-hover-color': '#fff'
    }
};