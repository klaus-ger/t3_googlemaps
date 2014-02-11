<?php

$TCA['tx_googlefun_domain_model_region'] = array(
    'ctrl' => $TCA['tx_googlefun_domain_model_region']['ctrl'],
    'interface' => array(
        'showRecordFieldList' => '    region_plz
                                    , region_type
                                    , region_long
                                    , region_lat'
    ),
    'types' => array(
        '1' => array('showitem' => '  region_plz
                                     , region_type
                                     , region_long
                                     , region_lat
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
                'foreign_table' => 'tx_t3gists_domain_model_gists',
                'foreign_table_where' => 'AND tx_googlefun_domain_model_region.uid=###REC_FIELD_l18n_parent### AND tx_googlefun_domain_model_region.sys_language_uid IN (-1,0)',
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
        'crdate' => array(
            'exclude' => 0,
            'label' => 'crdate',
            'config' => array(
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
            )
        ),
        'region_plz' => array(
            'exclude' => 0,
            'label' => 'region_plz',
            'config' => array(
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
            )
        ),
        'region_type' => array(
            'exclude' => 0,
            'label' => 'Date',
            'config' => array(
                'type' => 'text',
                'size' => 30,
            )
        ),

        'region_long' => array(
            'exclude' => 0,
            'label' => 'region_long',
            'config' => array(
                'type' => 'input',
                'size' => 100,
            )
        ),
        
        'region_lat' => array(
            'exclude' => 0,
            'label' => 'gist_code',
            'config' => array(
                'type' => 'input',
                'size' => 100,
            )
        ),
        
        
        
    ),
);
?>