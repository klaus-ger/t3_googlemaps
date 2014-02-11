<?php
if (!defined ('TYPO3_MODE'))  die ('Access denied.');

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'T3developer.' . $_EXTKEY,
	'googlefun',
	array(
		
                'Map'   =>  ' index
                            , findMarkerByAjax'
	 ),

    array ( 
                'Map'   =>  ' index
                            , findMarkerByAjax'
            )
);


$TYPO3_CONF_VARS['FE']['eID_include']['ajaxDispatcher'] = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('googlefun').'Classes/EIDispatcher.php';


?>