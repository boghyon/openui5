// add your copyright here

sap.ui.define(["sap/ui/integration/Designtime"], function (
	Designtime
) {
	"use strict";
	return function () {
		return new Designtime({
			"form": {
				"items": {
					"string": {
						"manifestpath": "/sap.card/configuration/parameters/string/value",
						"defaultValue": "StringValue",
						"type": "string",
						"translatable": true,
						"required": true
					},
					"stringLabel": {
						"manifestpath": "/sap.card/configuration/parameters/stringLabel/value",
						"defaultValue": "StringValue",
						"type": "string",
						"label": "Direct String Label",
						"translatable": true
					},
					"stringLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/stringLabelTrans/value",
						"type": "string",
						"label": "{i18n>TRANSLATED_STRING_LABEL}",
						"translatable": true,
						"allowDynamicValues": false
					},
					"stringWithDescription": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithDescription/value",
						"type": "string",
						"label": "String with description",
						"description": "Description",
						"translatable": true
					},
					"stringWithLongDescription": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithLongDescription/value",
						"type": "string",
						"label": "String with long description",
						"description": "A very long description text that should wrap into the next line",
						"translatable": true
					},
					"stringWithTranslatedValue": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithTranslatedValue/value",
						"type": "string",
						"label": "String with translated value",
						"translatable": true
					},
					"stringWithTranslatedDTDefaultValue": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithTranslatedDTDefaultValue/value",
						"type": "string",
						"label": "String with translated value",
						"defaultValue": "{i18n>TRANSLATED_STRING_VALUE}",
						"translatable": true
					},
					"integer": {
						"manifestpath": "/sap.card/configuration/parameters/integer/value",
						"defaultValue": 1,
						"type": "integer",
						"visualization": {
							"type": "sap/m/Slider",
							"settings": {
								"value": "{currentSettings>value}",
								"min": 0,
								"max": 10,
								"width": "100%",
								"showAdvancedTooltip": true,
								"showHandleTooltip": false,
								"inputsAsTooltips": true,
								"enabled": "{currentSettings>editable}"
							}
						}
					},
					"integerLabel": {
						"manifestpath": "/sap.card/configuration/parameters/integerLabel/value",
						"defaultValue": 1,
						"type": "integer",
						"label": "Direct Integer Label"
					},
					"integerLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/integerLabelTrans/value",
						"defaultValue": 1,
						"type": "integer",
						"label": "{i18n>TRANSLATED_INTEGER_LABEL}"
					},
					"number": {
						"manifestpath": "/sap.card/configuration/parameters/number/value",
						"defaultValue": 1.5,
						"type": "number"
					},
					"numberLabel": {
						"manifestpath": "/sap.card/configuration/parameters/numberLabel/value",
						"defaultValue": 1.5,
						"type": "number",
						"label": "Direct number Label"
					},
					"numberLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/numberLabelTrans/value",
						"defaultValue": 1.5,
						"type": "number",
						"label": "{i18n>TRANSLATED_NUMBER_LABEL}"
					},
					"boolean": {
						"manifestpath": "/sap.card/configuration/parameters/boolean/value",
						"defaultValue": false,
						"type": "boolean",
						"visualization": {
							"type": "sap/m/Switch",
							"settings": {
								"state": "{currentSettings>value}",
								"customTextOn": "Yes",
								"customTextOff": "No",
								"enabled": "{currentSettings>editable}"
							}
						}
					},
					"booleanLabel": {
						"manifestpath": "/sap.card/configuration/parameters/booleanLabel/value",
						"defaultValue": true,
						"type": "boolean",
						"label": "Direct Boolean Label"
					},
					"booleanLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/booleanLabelTrans/value",
						"defaultValue": false,
						"type": "boolean",
						"label": "{i18n>TRANSLATED_BOOLEAN_LABEL}"
					},
					"date": {
						"manifestpath": "/sap.card/configuration/parameters/date/value",
						"defaultValue": "2020-09-02",
						"type": "date"
					},
					"dateLabel": {
						"manifestpath": "/sap.card/configuration/parameters/dateLabel/value",
						"defaultValue": "2020-09-02",
						"type": "date",
						"label": "Direct Date Label"
					},
					"dateLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/dateLabelTrans/value",
						"defaultValue": "2020-09-02",
						"type": "date",
						"label": "{i18n>TRANSLATED_DATE_LABEL}"
					},
					"dateTime": {
						"manifestpath": "/sap.card/configuration/parameters/dateTime/value",
						"defaultValue": "2020-09-02T11:21:51.470Z",
						"type": "datetime"
					},
					"dateTimeLabel": {
						"manifestpath": "/sap.card/configuration/parameters/dateTimeLabel/value",
						"defaultValue": "2020-09-02T11:21:51.470Z",
						"type": "datetime",
						"label": "Direct Date Time Label"
					},
					"dateTimeLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/dateTimeLabelTrans/value",
						"defaultValue": "2020-09-02T11:21:51.470Z",
						"type": "datetime",
						"label": "{i18n>TRANSLATED_DATETIME_LABEL}"
					},
					"enum": {
						"manifestpath": "/sap.card/configuration/parameters/enum/value",
						"label": "Enumerations",
						"type": "enum",
						"defaultValue": "Option A",
						"enum": [
							"Option A",
							"Option B",
							"Option C"
						]
					},
					"stringWithStaticList": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithStaticList/value",
						"type": "string",
						"values": {
							"data": {
								"json": [
									{ "text": "text1", "key": "key1", "additionalText": "addtext1", "icon": "sap-icon://accept" },
									{ "text": "text2", "key": "key2", "additionalText": "addtext2", "icon": "sap-icon://cart" },
									{ "text": "text3", "key": "key3", "additionalText": "addtext3", "icon": "sap-icon://zoom-in" }
								],
								"path": "/"
							},
							"item": {
								"text": "{text}",
								"key": "{key}",
								"additionalText": "{additionalText}",
								"icon": "{icon}"
							}
						}
					},
					"stringWithRequestList": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithRequestList/value",
						"type": "string",
						"values": {
							"data": {
								"request": {
									"url": "./stringWithRequestList.json"
								},
								"path": "/values"
							},
							"item": {
								"text": "{text}",
								"key": "{key}",
								"additionalText": "{additionalText}",
								"icon": "{icon}"
							}
						}
					},
					"stringWithRequestFromDestinationList": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithRequestDestinationList/value",
						"type": "string",
						"values": {
							"data": {
								"request": {
									"url": "{{destinations.local}}/stringWithRequestList.json"
								},
								"path": "/values"
							},
							"item": {
								"text": "{text}",
								"key": "{key}",
								"additionalText": "{additionalText}",
								"icon": "{icon}"
							}
						}
					},
					"stringArray": {
						"manifestpath": "/sap.card/configuration/parameters/stringArray/value",
						"label": "String Array",
						"defaultValue": ["key1", "key2"],
						"type": "string[]",
						"values": {
							"data": {
								"json": {
									"values": [
										{ "text": "text1", "key": "key1", "additionalText": "addtext1", "icon": "sap-icon://accept" },
										{ "text": "text2", "key": "key2", "additionalText": "addtext2", "icon": "sap-icon://cart" },
										{ "text": "text3", "key": "key3", "additionalText": "addtext3", "icon": "sap-icon://zoom-in" }
									]
								},
								"path": "/values"
							},
							"item": {
								"text": "{text}",
								"key": "{key}",
								"additionalText": "{additionalText}",
								"icon": "{icon}"
							}
						}
					},
					"stringArrayNoValues": {
						"manifestpath": "/sap.card/configuration/parameters/stringArrayNoValues/value",
						"label": "String Array With No Values",
						"defaultValue": ["key1", "key2"],
						"type": "string[]"
					},
					"iconNotAllowFile": {
						"manifestpath": "/sap.card/configuration/parameters/iconNotAllowFile/src",
						"defaultValue": "sap-icon://account",
						"type": "string",
						"label": "Icon Not Allow File",
						"visualization": {
							"type": "IconSelect",
							"settings": {
								"value": "{currentSettings>value}",
								"editable": "{currentSettings>editable}",
								"allowFile": false
							}
						}
					},
					"iconNotAllowNone": {
						"manifestpath": "/sap.card/configuration/parameters/iconNotAllowNone/src",
						"defaultValue": "sap-icon://account",
						"type": "string",
						"label": "Icon Not Allow None",
						"visualization": {
							"type": "IconSelect",
							"settings": {
								"value": "{currentSettings>value}",
								"editable": "{currentSettings>editable}",
								"allowNone": false
							}
						}
					},
					"iconNotAllowFileAndNone": {
						"manifestpath": "/sap.card/configuration/parameters/iconNotAllowFileAndNone/src",
						"defaultValue": "sap-icon://account",
						"type": "string",
						"label": "Icon Not Allow File And None",
						"visualization": {
							"type": "IconSelect",
							"settings": {
								"value": "{currentSettings>value}",
								"editable": "{currentSettings>editable}",
								"allowFile": false,
								"allowNone": false
							}
						}
					},
					"iconWithImage": {
						"manifestpath": "/sap.card/configuration/parameters/iconWithImage/value",
						"defaultValue": "sap-icon://account",
						"type": "string",
						"label": "iconWithImage",
						"visualization": {
							"type": "IconSelect",
							"settings": {
								"value": "{currentSettings>value}",
								"editable": "{currentSettings>editable}"
							}
						}
					},
					"iconWithImageNotAllowNone": {
						"manifestpath": "/sap.card/configuration/parameters/iconWithImageNotAllowNone/value",
						"defaultValue": "sap-icon://account",
						"type": "string",
						"label": "iconWithImage Not Allow None",
						"visualization": {
							"type": "IconSelect",
							"settings": {
								"value": "{currentSettings>value}",
								"editable": "{currentSettings>editable}",
								"allowNone": false
							}
						}
					},
					"icon": {
						"manifestpath": "/sap.card/header/icon/src",
						"defaultValue": "sap-icon://account",
						"type": "string",
						"label": "Icon",
						"visualization": {
							"type": "IconSelect",
							"settings": {
								"value": "{currentSettings>value}",
								"editable": "{currentSettings>editable}"
							}
						}
					},
					"color": {
						"manifestpath": "/sap.card/header/icon/backgroundColor",
						"defaultValue": "",
						"type": "string",
						"label": "Icon Background",
						"visualization": {
							"type": "ColorSelect",
							"settings": {
								"enumValue": "{currentSettings>value}",
								"editable": "{currentSettings>editable}"
							}
						},
						"cols": 1
					},
					"shape": {
						"manifestpath": "/sap.card/header/icon/shape",
						"defaultValue": "Circle",
						"label": "Icon Shape",
						"type": "string",
						"visualization": {
							"type": "ShapeSelect",
							"settings": {
								"value": "{currentSettings>value}",
								"editable": "{currentSettings>editable}"
							}
						},
						"cols": 1
					},
					"maxItems": {
						"manifestpath": "/sap.card/content/maxItems",
						"defaultValue": 1,
						"type": "integer",
						"visualization": {
							"type": "sap/m/Slider",
							"settings": {
								"value": "{currentSettings>value}",
								"min": 0,
								"max": 10,
								"width": "100%",
								"showAdvancedTooltip": true,
								"showHandleTooltip": false,
								"inputsAsTooltips": true,
								"enabled": "{currentSettings>editable}"
							}
						}
					},
					"group": {
						"label": "Dependent",
						"type": "group"
					},
					"string1": {
						"manifestpath": "/sap.card/configuration/parameters/string1/value",
						"defaultValue": "editable",
						"label": "String: editable, visible, label",
						"type": "string"
					},
					"dependentString1": {
						"manifestpath": "/sap.card/configuration/parameters/dependentString1/value",
						"defaultValue": "Editable changes depend on string1",
						"type": "string",
						"editable": "{= ${items>string1/value} === 'editable'}"
					},
					"dependentString2": {
						"manifestpath": "/sap.card/configuration/parameters/dependentString2/value",
						"defaultValue": "Visible changes depend on string1",
						"type": "string",
						"visible": "{= ${items>string1/value} === 'visible'}"
					},
					"dependentString3": {
						"manifestpath": "/sap.card/configuration/parameters/dependentString3/value",
						"label": "{= ${items>string1/value} === 'label'? 'dependentString3 True' : 'dependentString3 False' }",
						"defaultValue": "Label changes depend on string1",
						"type": "string"
					},
					"integer1": {
						"manifestpath": "/sap.card/configuration/parameters/integer1/value",
						"defaultValue": 1,
						"type": "integer",
						"label": "Integer: 1, 3, 6, 9"
					},
					"dependentInteger1": {
						"manifestpath": "/sap.card/configuration/parameters/dependentInteger1/value",
						"defaultValue": "Editable changes depend on integer1",
						"type": "string",
						"editable": "{= ${items>integer1/value} > 2}"
					},
					"dependentInteger2": {
						"manifestpath": "/sap.card/configuration/parameters/dependentInteger1/value",
						"defaultValue": "Visible changes depend on integer1",
						"type": "string",
						"visible": "{= ${items>integer1/value} > 5}"
					},
					"dependentInteger3": {
						"manifestpath": "/sap.card/configuration/parameters/dependentInteger3/value",
						"label": "{= ${items>integer1/value} > 8 ? 'dependentInteger3 True' : 'dependentInteger3 False' }",
						"type": "string"
					},
					"boolean1": {
						"manifestpath": "/sap.card/configuration/parameters/boolean1/value",
						"defaultValue": false,
						"type": "boolean",
						"label": "boolean",
						"visualization": {
							"type": "sap/m/Switch",
							"settings": {
								"state": "{currentSettings>value}",
								"customTextOn": "Yes",
								"customTextOff": "No",
								"enabled": "{currentSettings>editable}"
							}
						}
					},
					"dependentBoolean1": {
						"manifestpath": "/sap.card/configuration/parameters/dependentBoolean1/value",
						"defaultValue": "Editable changes depend on boolean1",
						"type": "string",
						"editable": "{items>boolean1/value}"
					},
					"dependentBoolean2": {
						"manifestpath": "/sap.card/configuration/parameters/dependentBoolean2/value",
						"defaultValue": "Visible changes depend on boolean1",
						"type": "string",
						"visible": "{items>boolean1/value}"
					},
					"dependentBoolean3": {
						"manifestpath": "/sap.card/configuration/parameters/dependentBoolean3/value",
						"label": "{= ${items>boolean1/value} === true ? 'dependentBoolean3 True' : 'dependentBoolean3 False' }",
						"type": "string"
					}
				}
			},
			"preview": {
				"modes": "LiveAbstract"
			}
		});
	};
});
