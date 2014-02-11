CREATE TABLE tx_googlefun_domain_model_item (
    uid int(11) unsigned DEFAULT '0' NOT NULL auto_increment,
    pid int(11) DEFAULT '0' NOT NULL,

    tstamp int(11) unsigned DEFAULT '0' NOT NULL, 
    crdate int(11) unsigned DEFAULT '0' NOT NULL, 
    deleted tinyint(4) unsigned DEFAULT '0' NOT NULL, 
    hidden tinyint(4) unsigned DEFAULT '0' NOT NULL, 
	
    gfun_plz varchar(6) DEFAULT '' NOT NULL,
    gfun_title varchar(255) DEFAULT '' NOT NULL,
    gfun_text text,
    gfun_field1 int(11) unsigned DEFAULT '0' NOT NULL,
    gfun_field2 int(11) unsigned DEFAULT '0' NOT NULL,
    gfun_field3 int(11) unsigned DEFAULT '0' NOT NULL,

    t3ver_oid int(11) DEFAULT '0' NOT NULL,
    t3ver_id int(11) DEFAULT '0' NOT NULL,
    t3ver_wsid int(11) DEFAULT '0' NOT NULL,
    t3ver_label varchar(30) DEFAULT '' NOT NULL,
    t3ver_state tinyint(4) DEFAULT '0' NOT NULL,
    t3ver_stage tinyint(4) DEFAULT '0' NOT NULL,
    t3ver_count int(11) DEFAULT '0' NOT NULL,
    t3ver_tstamp int(11) DEFAULT '0' NOT NULL,
    t3_origuid int(11) DEFAULT '0' NOT NULL,

    sys_language_uid int(11) DEFAULT '0' NOT NULL,
    l18n_parent int(11) DEFAULT '0' NOT NULL,
    l18n_diffsource mediumblob NOT NULL,

    PRIMARY KEY (uid),
    KEY parent (pid)
);

CREATE TABLE tx_googlefun_domain_model_region (
    uid int(11) unsigned DEFAULT '0' NOT NULL auto_increment,
    pid int(11) DEFAULT '0' NOT NULL,

    tstamp int(11) unsigned DEFAULT '0' NOT NULL, 
    crdate int(11) unsigned DEFAULT '0' NOT NULL, 
    deleted tinyint(4) unsigned DEFAULT '0' NOT NULL, 
    hidden tinyint(4) unsigned DEFAULT '0' NOT NULL, 
	
    region_plz varchar(6) DEFAULT '' NOT NULL,
    region_type tinyint(4) unsigned DEFAULT '0' NOT NULL, 
    region_name varchar(255) DEFAULT '' NOT NULL,
    region_long varchar(255) DEFAULT '' NOT NULL,
    region_lat varchar(255) DEFAULT '' NOT NULL,
    

    t3ver_oid int(11) DEFAULT '0' NOT NULL,
    t3ver_id int(11) DEFAULT '0' NOT NULL,
    t3ver_wsid int(11) DEFAULT '0' NOT NULL,
    t3ver_label varchar(30) DEFAULT '' NOT NULL,
    t3ver_state tinyint(4) DEFAULT '0' NOT NULL,
    t3ver_stage tinyint(4) DEFAULT '0' NOT NULL,
    t3ver_count int(11) DEFAULT '0' NOT NULL,
    t3ver_tstamp int(11) DEFAULT '0' NOT NULL,
    t3_origuid int(11) DEFAULT '0' NOT NULL,

    sys_language_uid int(11) DEFAULT '0' NOT NULL,
    l18n_parent int(11) DEFAULT '0' NOT NULL,
    l18n_diffsource mediumblob NOT NULL,

    PRIMARY KEY (uid),
    KEY parent (pid)
);