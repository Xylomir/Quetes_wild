if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
var c;
var addedNow = [];

if (!dwr.engine._mappedClasses["MF_IncludeFile"]) {
c = function() {
this.updateDate = null;
this.clientid = null;
this.ftype = null;
this.id = null;
this.projectid = null;
this.key = null;
this.createDate = null;
this.fileid = null;
}
c.$dwrClassName = 'MF_IncludeFile';
c.$dwrClassMembers = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.ftype = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.key = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.fileid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_IncludeFile", c);
dwr.engine._mappedClasses["MF_IncludeFile"] = c;
addedNow["MF_IncludeFile"] = true;
}

if (!dwr.engine._mappedClasses["MF_User"]) {
c = function() {
this.lastLogin = null;
this.lastName = null;
this.isNewLicense = null;
this.accountType = null;
this.companyName = null;
this.projectsLeft = 0;
this.pid = null;
this.teamLicenseOwner = null;
this.storage = null;
this.isTrial = null;
this.plusEdition = null;
this.type = null;
this.emailAlert = null;
this.firstName = null;
this.password = null;
this.tokenKey = null;
this.company = null;
this.jwtToken = null;
this.hadTrial = null;
this.teamEditor = null;
this.teamPremium = null;
this.createDate = null;
this.isBasic = null;
this.username = null;
}
c.$dwrClassName = 'MF_User';
c.$dwrClassMembers = {};
c.$dwrClassMembers.lastLogin = {};
c.$dwrClassMembers.lastName = {};
c.$dwrClassMembers.isNewLicense = {};
c.$dwrClassMembers.accountType = {};
c.$dwrClassMembers.companyName = {};
c.$dwrClassMembers.projectsLeft = {};
c.$dwrClassMembers.pid = {};
c.$dwrClassMembers.teamLicenseOwner = {};
c.$dwrClassMembers.storage = {};
c.$dwrClassMembers.isTrial = {};
c.$dwrClassMembers.plusEdition = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.emailAlert = {};
c.$dwrClassMembers.firstName = {};
c.$dwrClassMembers.password = {};
c.$dwrClassMembers.tokenKey = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.jwtToken = {};
c.$dwrClassMembers.hadTrial = {};
c.$dwrClassMembers.teamEditor = {};
c.$dwrClassMembers.teamPremium = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.isBasic = {};
c.$dwrClassMembers.username = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_User", c);
dwr.engine._mappedClasses["MF_User"] = c;
addedNow["MF_User"] = true;
}

if (!dwr.engine._mappedClasses["MF_SiteLicense"]) {
c = function() {
this.period = null;
this.clientid = null;
this.cost = 0;
this.quantity = 0;
this.edition = null;
this.id = null;
this.status = null;
this.txnID = null;
}
c.$dwrClassName = 'MF_SiteLicense';
c.$dwrClassMembers = {};
c.$dwrClassMembers.period = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.cost = {};
c.$dwrClassMembers.quantity = {};
c.$dwrClassMembers.edition = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.status = {};
c.$dwrClassMembers.txnID = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SiteLicense", c);
dwr.engine._mappedClasses["MF_SiteLicense"] = c;
addedNow["MF_SiteLicense"] = true;
}

if (!dwr.engine._mappedClasses["MF_Company"]) {
c = function() {
this.companyid = null;
this.creator = null;
this.edition = null;
this.plimit = 0;
this.pid = null;
this.dbserver = null;
this.storage = null;
this.createDate = null;
this.status = null;
}
c.$dwrClassName = 'MF_Company';
c.$dwrClassMembers = {};
c.$dwrClassMembers.companyid = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.edition = {};
c.$dwrClassMembers.plimit = {};
c.$dwrClassMembers.pid = {};
c.$dwrClassMembers.dbserver = {};
c.$dwrClassMembers.storage = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.status = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Company", c);
dwr.engine._mappedClasses["MF_Company"] = c;
addedNow["MF_Company"] = true;
}

if (!dwr.engine._mappedClasses["MF_LicenseUser"]) {
c = function() {
this.clientid = null;
this.id = null;
this.email = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_LicenseUser';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.email = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_LicenseUser", c);
dwr.engine._mappedClasses["MF_LicenseUser"] = c;
addedNow["MF_LicenseUser"] = true;
}

if (!dwr.engine._mappedClasses["MF_AssetFile"]) {
c = function() {
this.thumbnail = null;
this.clientid = null;
this.size = null;
this.type = null;
this.projectid = null;
this.createDate = null;
this.fileid = null;
this.group = null;
}
c.$dwrClassName = 'MF_AssetFile';
c.$dwrClassMembers = {};
c.$dwrClassMembers.thumbnail = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.size = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.fileid = {};
c.$dwrClassMembers.group = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_AssetFile", c);
dwr.engine._mappedClasses["MF_AssetFile"] = c;
addedNow["MF_AssetFile"] = true;
}

if (!dwr.engine._mappedClasses["MF_DashboardData"]) {
c = function() {
this.ownedProjectsCount = 0;
this.projects = null;
this.totalProjectsCount = 0;
this.readonlyProjectsCount = 0;
this.trashProjectsCount = 0;
this.sharedProjectsCount = 0;
this.logshared = null;
this.labels = null;
this.publicProjectsCount = 0;
}
c.$dwrClassName = 'MF_DashboardData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.ownedProjectsCount = {};
c.$dwrClassMembers.projects = {};
c.$dwrClassMembers.totalProjectsCount = {};
c.$dwrClassMembers.readonlyProjectsCount = {};
c.$dwrClassMembers.trashProjectsCount = {};
c.$dwrClassMembers.sharedProjectsCount = {};
c.$dwrClassMembers.logshared = {};
c.$dwrClassMembers.labels = {};
c.$dwrClassMembers.publicProjectsCount = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_DashboardData", c);
dwr.engine._mappedClasses["MF_DashboardData"] = c;
addedNow["MF_DashboardData"] = true;
}

if (!dwr.engine._mappedClasses["MF_SiteLicenseData"]) {
c = function() {
this.licenses = null;
this.domainLicenses = null;
}
c.$dwrClassName = 'MF_SiteLicenseData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.licenses = {};
c.$dwrClassMembers.domainLicenses = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SiteLicenseData", c);
dwr.engine._mappedClasses["MF_SiteLicenseData"] = c;
addedNow["MF_SiteLicenseData"] = true;
}

if (!dwr.engine._mappedClasses["MF_ProjectInfoData"]) {
c = function() {
this.log = null;
this.collaborators = null;
}
c.$dwrClassName = 'MF_ProjectInfoData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.log = {};
c.$dwrClassMembers.collaborators = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ProjectInfoData", c);
dwr.engine._mappedClasses["MF_ProjectInfoData"] = c;
addedNow["MF_ProjectInfoData"] = true;
}

if (!dwr.engine._mappedClasses["MF_SiteBackup"]) {
c = function() {
this.note = null;
this.clientid = null;
this.id = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_SiteBackup';
c.$dwrClassMembers = {};
c.$dwrClassMembers.note = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SiteBackup", c);
dwr.engine._mappedClasses["MF_SiteBackup"] = c;
addedNow["MF_SiteBackup"] = true;
}

if (!dwr.engine._mappedClasses["MF_LogShared"]) {
c = function() {
this.creator = null;
this.logtype = null;
this.receiver = null;
this.creatorName = null;
this.opened = null;
this.id = null;
this.projectName = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_LogShared';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.logtype = {};
c.$dwrClassMembers.receiver = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.opened = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectName = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_LogShared", c);
dwr.engine._mappedClasses["MF_LogShared"] = c;
addedNow["MF_LogShared"] = true;
}

if (!dwr.engine._mappedClasses["MF_Collaborator"]) {
c = function() {
this.online = null;
this.disabled = null;
this.id = null;
this.type = null;
this.projectid = null;
this.sharePerm = null;
this.userid = null;
}
c.$dwrClassName = 'MF_Collaborator';
c.$dwrClassMembers = {};
c.$dwrClassMembers.online = {};
c.$dwrClassMembers.disabled = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.sharePerm = {};
c.$dwrClassMembers.userid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Collaborator", c);
dwr.engine._mappedClasses["MF_Collaborator"] = c;
addedNow["MF_Collaborator"] = true;
}

if (!dwr.engine._mappedClasses["MF_Log"]) {
c = function() {
this.creator = null;
this.logtype = null;
this.clientid = null;
this.log = null;
this.creatorName = null;
this.id = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_Log';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.logtype = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.log = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Log", c);
dwr.engine._mappedClasses["MF_Log"] = c;
addedNow["MF_Log"] = true;
}

if (!dwr.engine._mappedClasses["MF_ProjectLabel"]) {
c = function() {
this.clientid = null;
this.projects = null;
this.color = null;
this.name = null;
this.id = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_ProjectLabel';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.projects = {};
c.$dwrClassMembers.color = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ProjectLabel", c);
dwr.engine._mappedClasses["MF_ProjectLabel"] = c;
addedNow["MF_ProjectLabel"] = true;
}

if (!dwr.engine._mappedClasses["MF_JSFile"]) {
c = function() {
this.updateDate = null;
this.clientid = null;
this.ftype = null;
this.id = null;
this.projectid = null;
this.key = null;
this.createDate = null;
this.fileid = null;
}
c.$dwrClassName = 'MF_JSFile';
c.$dwrClassMembers = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.ftype = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.key = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.fileid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_JSFile", c);
dwr.engine._mappedClasses["MF_JSFile"] = c;
addedNow["MF_JSFile"] = true;
}

if (!dwr.engine._mappedClasses["MF_UserInactive"]) {
c = function() {
this.firstName = null;
this.lastName = null;
this.password = null;
this.companyName = null;
this.expiry = null;
this.activateKey = null;
this.createDate = null;
this.username = null;
}
c.$dwrClassName = 'MF_UserInactive';
c.$dwrClassMembers = {};
c.$dwrClassMembers.firstName = {};
c.$dwrClassMembers.lastName = {};
c.$dwrClassMembers.password = {};
c.$dwrClassMembers.companyName = {};
c.$dwrClassMembers.expiry = {};
c.$dwrClassMembers.activateKey = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.username = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_UserInactive", c);
dwr.engine._mappedClasses["MF_UserInactive"] = c;
addedNow["MF_UserInactive"] = true;
}

if (!dwr.engine._mappedClasses["MF_ActivityLog"]) {
c = function() {
this.filetype = null;
this.creator = null;
this.clientid = null;
this.log = null;
this.subtype = null;
this.creatorName = null;
this.id = null;
this.type = null;
this.projectid = null;
this.createDate = null;
this.fileid = null;
}
c.$dwrClassName = 'MF_ActivityLog';
c.$dwrClassMembers = {};
c.$dwrClassMembers.filetype = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.log = {};
c.$dwrClassMembers.subtype = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.fileid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ActivityLog", c);
dwr.engine._mappedClasses["MF_ActivityLog"] = c;
addedNow["MF_ActivityLog"] = true;
}

if (!dwr.engine._mappedClasses["MF_SiteTemplate"]) {
c = function() {
this.submitter = null;
this.copyright = null;
this.featured = null;
this.abuse = null;
this.rating = 0;
this.title = null;
this.type = null;
this.tags = null;
this.premium = null;
this.downloads = 0;
this.template_options = null;
this.privateObj = null;
this.id = null;
this.submitterName = null;
this.cid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_SiteTemplate';
c.$dwrClassMembers = {};
c.$dwrClassMembers.submitter = {};
c.$dwrClassMembers.copyright = {};
c.$dwrClassMembers.featured = {};
c.$dwrClassMembers.abuse = {};
c.$dwrClassMembers.rating = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.tags = {};
c.$dwrClassMembers.premium = {};
c.$dwrClassMembers.downloads = {};
c.$dwrClassMembers.template_options = {};
c.$dwrClassMembers.privateObj = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.submitterName = {};
c.$dwrClassMembers.cid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SiteTemplate", c);
dwr.engine._mappedClasses["MF_SiteTemplate"] = c;
addedNow["MF_SiteTemplate"] = true;
}

if (!dwr.engine._mappedClasses["MF_LicenseData"]) {
c = function() {
this.licenses = null;
this.userLicenses = null;
}
c.$dwrClassName = 'MF_LicenseData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.licenses = {};
c.$dwrClassMembers.userLicenses = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_LicenseData", c);
dwr.engine._mappedClasses["MF_LicenseData"] = c;
addedNow["MF_LicenseData"] = true;
}

if (!dwr.engine._mappedClasses["MF_TeamMember"]) {
c = function() {
this.license = null;
this.id = null;
this.type = null;
this.userid = null;
}
c.$dwrClassName = 'MF_TeamMember';
c.$dwrClassMembers = {};
c.$dwrClassMembers.license = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.userid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_TeamMember", c);
dwr.engine._mappedClasses["MF_TeamMember"] = c;
addedNow["MF_TeamMember"] = true;
}

if (!dwr.engine._mappedClasses["MF_CSSFile"]) {
c = function() {
this.updateDate = null;
this.clientid = null;
this.ftype = null;
this.id = null;
this.projectid = null;
this.key = null;
this.createDate = null;
this.fileid = null;
}
c.$dwrClassName = 'MF_CSSFile';
c.$dwrClassMembers = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.ftype = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.key = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.fileid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_CSSFile", c);
dwr.engine._mappedClasses["MF_CSSFile"] = c;
addedNow["MF_CSSFile"] = true;
}

if (!dwr.engine._mappedClasses["MF_ImageInfo"]) {
c = function() {
this.clientid = null;
this.width = null;
this.projectid = null;
this.fileid = null;
this.height = null;
}
c.$dwrClassName = 'MF_ImageInfo';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.width = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.fileid = {};
c.$dwrClassMembers.height = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ImageInfo", c);
dwr.engine._mappedClasses["MF_ImageInfo"] = c;
addedNow["MF_ImageInfo"] = true;
}

if (!dwr.engine._mappedClasses["MF_OpenTab"]) {
c = function() {
this.clientid = null;
this.id = null;
this.type = null;
this.projectid = null;
this.key = null;
this.createDate = null;
this.fileid = null;
}
c.$dwrClassName = 'MF_OpenTab';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.key = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.fileid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_OpenTab", c);
dwr.engine._mappedClasses["MF_OpenTab"] = c;
addedNow["MF_OpenTab"] = true;
}

if (!dwr.engine._mappedClasses["MF_LibFile"]) {
c = function() {
this.sequence = 0;
this.clientid = null;
this.folder = null;
this.ftype = null;
this.size = null;
this.id = null;
this.type = null;
this.projectid = null;
this.key = null;
this.fileid = null;
}
c.$dwrClassName = 'MF_LibFile';
c.$dwrClassMembers = {};
c.$dwrClassMembers.sequence = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.folder = {};
c.$dwrClassMembers.ftype = {};
c.$dwrClassMembers.size = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.key = {};
c.$dwrClassMembers.fileid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_LibFile", c);
dwr.engine._mappedClasses["MF_LibFile"] = c;
addedNow["MF_LibFile"] = true;
}

if (!dwr.engine._mappedClasses["MF_Revision"]) {
c = function() {
this.note = null;
this.auto = null;
this.id = null;
this.key = null;
this.createDate = null;
this.fileid = null;
}
c.$dwrClassName = 'MF_Revision';
c.$dwrClassMembers = {};
c.$dwrClassMembers.note = {};
c.$dwrClassMembers.auto = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.key = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.fileid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Revision", c);
dwr.engine._mappedClasses["MF_Revision"] = c;
addedNow["MF_Revision"] = true;
}

if (!dwr.engine._mappedClasses["MF_HTMLFile"]) {
c = function() {
this.updateDate = null;
this.clientid = null;
this.ftype = null;
this.id = null;
this.projectid = null;
this.key = null;
this.createDate = null;
this.fileid = null;
}
c.$dwrClassName = 'MF_HTMLFile';
c.$dwrClassMembers = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.ftype = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.key = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.fileid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_HTMLFile", c);
dwr.engine._mappedClasses["MF_HTMLFile"] = c;
addedNow["MF_HTMLFile"] = true;
}

if (!dwr.engine._mappedClasses["MF_ChatMember"]) {
c = function() {
this.name = null;
this.userid = null;
}
c.$dwrClassName = 'MF_ChatMember';
c.$dwrClassMembers = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.userid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ChatMember", c);
dwr.engine._mappedClasses["MF_ChatMember"] = c;
addedNow["MF_ChatMember"] = true;
}

if (!dwr.engine._mappedClasses["MF_SharePerm"]) {
c = function() {
this.canViewMembers = null;
this.canPublishSite = null;
this.canManageRevisions = null;
this.canManageBackups = null;
this.canViewLog = null;
this.canAddFile = null;
this.canDeleteFile = null;
}
c.$dwrClassName = 'MF_SharePerm';
c.$dwrClassMembers = {};
c.$dwrClassMembers.canViewMembers = {};
c.$dwrClassMembers.canPublishSite = {};
c.$dwrClassMembers.canManageRevisions = {};
c.$dwrClassMembers.canManageBackups = {};
c.$dwrClassMembers.canViewLog = {};
c.$dwrClassMembers.canAddFile = {};
c.$dwrClassMembers.canDeleteFile = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SharePerm", c);
dwr.engine._mappedClasses["MF_SharePerm"] = c;
addedNow["MF_SharePerm"] = true;
}

if (!dwr.engine._mappedClasses["MF_Project"]) {
c = function() {
this.updateDate = null;
this.domainType = null;
this.jsgzip = null;
this.stamp = null;
this.publish_options = null;
this.title = null;
this.isdeleted = null;
this.sharedClient = null;
this.checkPermission = null;
this.pages = 0;
this.permitted = null;
this.readonly = null;
this.jsCollection = null;
this.cssgzip = null;
this.jsminify = null;
this.members = 0;
this.shareDisabled = null;
this.collaborators = null;
this.company = null;
this.share = null;
this.id = null;
this.sharePerm = null;
this.openTabCollection = null;
this.createDate = null;
this.isBasic = null;
this.permissionType = null;
this.creator = null;
this.realtime = null;
this.deletedon = null;
this.domainAllowed = null;
this.availableSiteLicenses = 0;
this.htmlgzip = null;
this.cssminify = null;
this.includeCollection = null;
this.published = null;
this.revision = null;
this.htmlCollection = null;
this.domain = null;
this.pubid = null;
this.cssCollection = null;
}
c.$dwrClassName = 'MF_Project';
c.$dwrClassMembers = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.domainType = {};
c.$dwrClassMembers.jsgzip = {};
c.$dwrClassMembers.stamp = {};
c.$dwrClassMembers.publish_options = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.isdeleted = {};
c.$dwrClassMembers.sharedClient = {};
c.$dwrClassMembers.checkPermission = {};
c.$dwrClassMembers.pages = {};
c.$dwrClassMembers.permitted = {};
c.$dwrClassMembers.readonly = {};
c.$dwrClassMembers.jsCollection = {};
c.$dwrClassMembers.cssgzip = {};
c.$dwrClassMembers.jsminify = {};
c.$dwrClassMembers.members = {};
c.$dwrClassMembers.shareDisabled = {};
c.$dwrClassMembers.collaborators = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.share = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.sharePerm = {};
c.$dwrClassMembers.openTabCollection = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.isBasic = {};
c.$dwrClassMembers.permissionType = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.realtime = {};
c.$dwrClassMembers.deletedon = {};
c.$dwrClassMembers.domainAllowed = {};
c.$dwrClassMembers.availableSiteLicenses = {};
c.$dwrClassMembers.htmlgzip = {};
c.$dwrClassMembers.cssminify = {};
c.$dwrClassMembers.includeCollection = {};
c.$dwrClassMembers.published = {};
c.$dwrClassMembers.revision = {};
c.$dwrClassMembers.htmlCollection = {};
c.$dwrClassMembers.domain = {};
c.$dwrClassMembers.pubid = {};
c.$dwrClassMembers.cssCollection = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Project", c);
dwr.engine._mappedClasses["MF_Project"] = c;
addedNow["MF_Project"] = true;
}

if (!dwr.engine._mappedClasses["MF_License"]) {
c = function() {
this.period = null;
this.clientid = null;
this.cost = 0;
this.edition = null;
this.id = null;
this.users = 0;
this.createDate = null;
this.status = null;
this.txnID = null;
}
c.$dwrClassName = 'MF_License';
c.$dwrClassMembers = {};
c.$dwrClassMembers.period = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.cost = {};
c.$dwrClassMembers.edition = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.users = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.status = {};
c.$dwrClassMembers.txnID = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_License", c);
dwr.engine._mappedClasses["MF_License"] = c;
addedNow["MF_License"] = true;
}

if (!dwr.engine._mappedClasses["MF_SiteLicenseDomain"]) {
c = function() {
this.clientid = null;
this.domain = null;
this.id = null;
this.createDate = null;
this.txnID = null;
}
c.$dwrClassName = 'MF_SiteLicenseDomain';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.domain = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.txnID = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SiteLicenseDomain", c);
dwr.engine._mappedClasses["MF_SiteLicenseDomain"] = c;
addedNow["MF_SiteLicenseDomain"] = true;
}

if (!dwr.engine._mappedClasses["MF_AssetData"]) {
c = function() {
this.assets = null;
this.groups = null;
}
c.$dwrClassName = 'MF_AssetData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.assets = {};
c.$dwrClassMembers.groups = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_AssetData", c);
dwr.engine._mappedClasses["MF_AssetData"] = c;
addedNow["MF_AssetData"] = true;
}

if (!dwr.engine._mappedClasses["MF_Feedback"]) {
c = function() {
this.creator = null;
this.creatorName = null;
this.comment = null;
this.id = null;
this.message = null;
this.reply = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_Feedback';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.comment = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.message = {};
c.$dwrClassMembers.reply = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Feedback", c);
dwr.engine._mappedClasses["MF_Feedback"] = c;
addedNow["MF_Feedback"] = true;
}

if (!dwr.engine._mappedClasses["MF_AssetGroup"]) {
c = function() {
this.assets = 0;
this.clientid = null;
this.name = null;
this.id = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_AssetGroup';
c.$dwrClassMembers = {};
c.$dwrClassMembers.assets = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_AssetGroup", c);
dwr.engine._mappedClasses["MF_AssetGroup"] = c;
addedNow["MF_AssetGroup"] = true;
}
})();

(function() {
if (dwr.engine._getObject("MF_Authentication") == undefined) {
var p;

p = {};







p.checkUser = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'checkUser', arguments);
};






p.checkUser = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'checkUser', arguments);
};






p.checkSecureKeyHashFast = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'checkSecureKeyHashFast', arguments);
};






p.checkProjectPermission = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'checkProjectPermission', arguments);
};








p.changePassword = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'changePassword', arguments);
};







p.addFirstSecureKeyHash = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'addFirstSecureKeyHash', arguments);
};







p.addSecureKeyHash = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'addSecureKeyHash', arguments);
};






p.daysBetween = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'daysBetween', arguments);
};





p.IsWireframeProPremiumLicense = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'IsWireframeProPremiumLicense', arguments);
};

dwr.engine._setObject("MF_Authentication", p);
}
})();

