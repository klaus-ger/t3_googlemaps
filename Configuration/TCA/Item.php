<?php

$TCA['tx_googlefun_domain_model_item'] = array(
    'ctrl' => $TCA['tx_googlefun_domain_model_item']['ctrl'],
    'interface' => array(
        'showRecordFieldList' => '    gfun_plz
                                    , gfun_title
                                    , gfun_text
                                    , gfun_field1
                                    , gfun_field2
                                    , gfun_field3'
    ),
    'types' => array(
        '1' => array('showitem' => '  gfun_plz
                                    , gfun_title
                                    , gfun_text
                                    , gfun_field1
                                    , gfun_field2
                                    , gfun_field3
                                     ')
    ),
    'palettes' => array(
        '1' => array('showitem' => '')
    ),
    'columns' => array(
         'sys_language_uid' => array(
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.php:LGL.language',
            'config' => array(
                'type' => 'select',
                'foreign_table' => 'sys_language',
                'foreign_table_where' => 'ORDER BY sys_language.title',
                'items' => array(
                    array('LLL:EXT:lang/locallang_general.php:LGL.allLanguages', -1),
                    array('LLL:EXT:lang/locallang_general.php:LGL.default_value', 0)
                )
            )
        ),
        'l18n_parent' => array(
            'displayCond' => 'FIELD:sys_language_uid:>:0',
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.php:LGL.l18n_parent',
            'config' => array(
                'type' => 'select',
                'items' => array(
                    array('', 0),
                ),
                'foreign_table' => 'tx_googlefun_domain_model_item',
                'foreign_table_where' => 'AND tx_googlefun_domain_model_item.uid=###REC_FIELD_l18n_parent### AND tx_googlefun_domain_model_item.sys_language_uid IN (-1,0)',
            )
        ),
        'l18n_diffsource' => array(
            'config' => array(
                'type' => 'passthrough')
        ),
        't3ver_label' => array(
            'displayCond' => 'FIELD:t3ver_label:REQ:true',
            'label' => 'LLL:EXT:lang/locallang_general.php:LGL.versionLabel',
            'config' => array(
                'type' => 'none',
                'cols' => 27
            )
        ),
        'hidden' => array(
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.xml:LGL.hidden',
            'config' => array(
                'type' => 'check'
            )
        ),
        'gfun_plz' => array(
            'exclude' => 0,
            'label' => 'PLZ',
            'config' => array(
                'type' => 'input',
                'size' => 6,
                'eval' => 'trim',
            )
        ),
        'gfun_title' => array(
            'exclude' => 0,
            'label' => 'Titel',
            'config' => array(
                'type' => 'input',
                'size' => 30,
            )
        ),

        'gfun_text' => array(
            'exclude' => 0,
            'label' => 'Text',
            'config' => array(
                'type' => 'text',
                'size' => 100,
            )
        ),
        
        'gfun_field1' => array(
            'exclude' => 0,
            'label' => 'Field 1',
            'config' => array(
                'type' => 'input'
            )
        ),
        
        'gfun_field2' => array(
            'exclude' => 0,
            'label' => 'Field 2',
            'config' => array(
                'type' => 'input'
            )
        ),
        
        'gfun_field3' => array(
            'exclude' => 0,
            'label' => 'Field 3',
            'config' => array(
                'type' => 'input'
            )
        ),
        
        
        
    ),
);
?>