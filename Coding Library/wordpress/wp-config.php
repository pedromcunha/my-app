<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+3u..ji.i$>o]]P(Qf=AHYY-<BYF7kfSkHyEFw)c:+nB!;;BXK0w6+_{V<dvS@md');
define('SECURE_AUTH_KEY',  'x.Vv4P1mWQS[`<wC`.s#ZChga|_=B4Y+!0?-Z~3jhbw}nOnzFt|chC|8oY+Ock:_');
define('LOGGED_IN_KEY',    '>@J(KCV*0:efM)!:Lilq.x5M+l]_FUn`m|x~#2tq[eTlc)nY?aad{H?+KQ?nA(iv');
define('NONCE_KEY',        '!~g: qeun8xw 6^b0T7g3sS<<]`9kuYxAto-(P`WWb*I-~K*^o||FVJfnRm_Vz`)');
define('AUTH_SALT',        '-_s2,b~bMKL#5H,XP-vtF)Xdz&.yuF|v=uNv&_ZQs),bM:`xe*g@^j>jd{Er_%Uk');
define('SECURE_AUTH_SALT', '6y4a34Xhr!zGhsO_4sxN0?4|*5ss3*7[h1]$2=NU~6NcN!*!,Iq$]sB,fBJE_/bF');
define('LOGGED_IN_SALT',   '-&4G!We[ )X$DZP5Yea|yWEk}&+H+Rs{%8Vc-/3yN/R3-1VPEJB>^-Z7[v*dBS|y');
define('NONCE_SALT',       '8kW)`{}lLflJu=k2`<+#Q~0+yBJbbgf#]xWx(SLz{b)|2a#*D6?}+p$9_pf]WrgZ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
