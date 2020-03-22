if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
var c;
var addedNow = [];

if (!dwr.engine._mappedClasses["MF_ImageItem"]) {
c = function() {
this.filetype = null;
this.image = null;
this.creator = null;
this.clientid = null;
this.filesize = null;
this.sectionid = null;
this.title = null;
this.options = null;
this.width = null;
this.sortorder = null;
this.id = null;
this.projectid = null;
this.height = null;
}
c.$dwrClassName = 'MF_ImageItem';
c.$dwrClassMembers = {};
c.$dwrClassMembers.filetype = {};
c.$dwrClassMembers.image = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.filesize = {};
c.$dwrClassMembers.sectionid = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.options = {};
c.$dwrClassMembers.width = {};
c.$dwrClassMembers.sortorder = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.height = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ImageItem", c);
dwr.engine._mappedClasses["MF_ImageItem"] = c;
addedNow["MF_ImageItem"] = true;
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

if (!dwr.engine._mappedClasses["MF_Theme"]) {
c = function() {
this.creator = null;
this.name = null;
this.stub = null;
this.createdate = null;
this.id = null;
this.layoutid = null;
}
c.$dwrClassName = 'MF_Theme';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.stub = {};
c.$dwrClassMembers.createdate = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.layoutid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Theme", c);
dwr.engine._mappedClasses["MF_Theme"] = c;
addedNow["MF_Theme"] = true;
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

if (!dwr.engine._mappedClasses["MF_Section"]) {
c = function() {
this.textItems = null;
this.clientid = null;
this.description = null;
this.title = null;
this.imageItems = null;
this.fontItems = null;
this.colorItems = null;
this.options = null;
this.sortorder = null;
this.id = null;
this.sectionType = null;
this.projectid = null;
this.videoItems = null;
}
c.$dwrClassName = 'MF_Section';
c.$dwrClassMembers = {};
c.$dwrClassMembers.textItems = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.description = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.imageItems = {};
c.$dwrClassMembers.fontItems = {};
c.$dwrClassMembers.colorItems = {};
c.$dwrClassMembers.options = {};
c.$dwrClassMembers.sortorder = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.sectionType = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.videoItems = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Section", c);
dwr.engine._mappedClasses["MF_Section"] = c;
addedNow["MF_Section"] = true;
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

if (!dwr.engine._mappedClasses["MF_ItemAttachment"]) {
c = function() {
this.itemId = null;
this.extension = null;
this.thumbnail = null;
this.clientId = null;
this.filename = null;
this.size = null;
this.width = null;
this.id = null;
this.sectionId = null;
this.projectId = null;
this.height = null;
}
c.$dwrClassName = 'MF_ItemAttachment';
c.$dwrClassMembers = {};
c.$dwrClassMembers.itemId = {};
c.$dwrClassMembers.extension = {};
c.$dwrClassMembers.thumbnail = {};
c.$dwrClassMembers.clientId = {};
c.$dwrClassMembers.filename = {};
c.$dwrClassMembers.size = {};
c.$dwrClassMembers.width = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.sectionId = {};
c.$dwrClassMembers.projectId = {};
c.$dwrClassMembers.height = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ItemAttachment", c);
dwr.engine._mappedClasses["MF_ItemAttachment"] = c;
addedNow["MF_ItemAttachment"] = true;
}

if (!dwr.engine._mappedClasses["MF_TextItem"]) {
c = function() {
this.clientid = null;
this.options = null;
this.description = null;
this.sortorder = null;
this.id = null;
this.sectionid = null;
this.title = null;
this.projectid = null;
}
c.$dwrClassName = 'MF_TextItem';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.options = {};
c.$dwrClassMembers.description = {};
c.$dwrClassMembers.sortorder = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.sectionid = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.projectid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_TextItem", c);
dwr.engine._mappedClasses["MF_TextItem"] = c;
addedNow["MF_TextItem"] = true;
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

if (!dwr.engine._mappedClasses["MF_ColorItem"]) {
c = function() {
this.clientid = null;
this.options = null;
this.colorcode = null;
this.sortorder = null;
this.id = null;
this.sectionid = null;
this.title = null;
this.projectid = null;
}
c.$dwrClassName = 'MF_ColorItem';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.options = {};
c.$dwrClassMembers.colorcode = {};
c.$dwrClassMembers.sortorder = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.sectionid = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.projectid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ColorItem", c);
dwr.engine._mappedClasses["MF_ColorItem"] = c;
addedNow["MF_ColorItem"] = true;
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

if (!dwr.engine._mappedClasses["MF_FontItem"]) {
c = function() {
this.fonttype = null;
this.clientid = null;
this.options = null;
this.sortorder = null;
this.id = null;
this.sectionid = null;
this.title = null;
this.projectid = null;
this.font = null;
}
c.$dwrClassName = 'MF_FontItem';
c.$dwrClassMembers = {};
c.$dwrClassMembers.fonttype = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.options = {};
c.$dwrClassMembers.sortorder = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.sectionid = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.font = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_FontItem", c);
dwr.engine._mappedClasses["MF_FontItem"] = c;
addedNow["MF_FontItem"] = true;
}

if (!dwr.engine._mappedClasses["MF_VideoItem"]) {
c = function() {
this.filetype = null;
this.creator = null;
this.clientid = null;
this.filesize = null;
this.sectionid = null;
this.video = null;
this.title = null;
this.customposter = null;
this.options = null;
this.width = null;
this.sortorder = null;
this.id = null;
this.poster = null;
this.projectid = null;
this.height = null;
}
c.$dwrClassName = 'MF_VideoItem';
c.$dwrClassMembers = {};
c.$dwrClassMembers.filetype = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.filesize = {};
c.$dwrClassMembers.sectionid = {};
c.$dwrClassMembers.video = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.customposter = {};
c.$dwrClassMembers.options = {};
c.$dwrClassMembers.width = {};
c.$dwrClassMembers.sortorder = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.poster = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.height = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_VideoItem", c);
dwr.engine._mappedClasses["MF_VideoItem"] = c;
addedNow["MF_VideoItem"] = true;
}

if (!dwr.engine._mappedClasses["MF_SharePerm"]) {
c = function() {
this.canViewMembers = null;
this.canChangeTheme = null;
this.canEditItem = null;
this.canDeleteItem = null;
this.canDeleteSection = null;
this.canAddSection = null;
this.canRateDesign = null;
this.canViewLog = null;
}
c.$dwrClassName = 'MF_SharePerm';
c.$dwrClassMembers = {};
c.$dwrClassMembers.canViewMembers = {};
c.$dwrClassMembers.canChangeTheme = {};
c.$dwrClassMembers.canEditItem = {};
c.$dwrClassMembers.canDeleteItem = {};
c.$dwrClassMembers.canDeleteSection = {};
c.$dwrClassMembers.canAddSection = {};
c.$dwrClassMembers.canRateDesign = {};
c.$dwrClassMembers.canViewLog = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SharePerm", c);
dwr.engine._mappedClasses["MF_SharePerm"] = c;
addedNow["MF_SharePerm"] = true;
}

if (!dwr.engine._mappedClasses["MF_Project"]) {
c = function() {
this.permissionType = null;
this.creator = null;
this.updateDate = null;
this.deletedon = null;
this.stamp = null;
this.themeId = null;
this.title = null;
this.isdeleted = null;
this.sharedClient = null;
this.checkPermission = null;
this.permitted = null;
this.readonly = null;
this.members = 0;
this.publicURL = null;
this.shareDisabled = null;
this.collaborators = null;
this.logo = null;
this.company = null;
this.share = null;
this.id = null;
this.sharePerm = null;
this.createDate = null;
this.isBasic = null;
}
c.$dwrClassName = 'MF_Project';
c.$dwrClassMembers = {};
c.$dwrClassMembers.permissionType = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.deletedon = {};
c.$dwrClassMembers.stamp = {};
c.$dwrClassMembers.themeId = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.isdeleted = {};
c.$dwrClassMembers.sharedClient = {};
c.$dwrClassMembers.checkPermission = {};
c.$dwrClassMembers.permitted = {};
c.$dwrClassMembers.readonly = {};
c.$dwrClassMembers.members = {};
c.$dwrClassMembers.publicURL = {};
c.$dwrClassMembers.shareDisabled = {};
c.$dwrClassMembers.collaborators = {};
c.$dwrClassMembers.logo = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.share = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.sharePerm = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.isBasic = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Project", c);
dwr.engine._mappedClasses["MF_Project"] = c;
addedNow["MF_Project"] = true;
}

if (!dwr.engine._mappedClasses["MF_CustomFont"]) {
c = function() {
this.filetype = null;
this.creator = null;
this.clientid = null;
this.filename = null;
this.filesize = null;
this.id = null;
this.projectid = null;
}
c.$dwrClassName = 'MF_CustomFont';
c.$dwrClassMembers = {};
c.$dwrClassMembers.filetype = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.filename = {};
c.$dwrClassMembers.filesize = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_CustomFont", c);
dwr.engine._mappedClasses["MF_CustomFont"] = c;
addedNow["MF_CustomFont"] = true;
}

if (!dwr.engine._mappedClasses["MF_ItemNoteAndAttachmentWrapper"]) {
c = function() {
this.itemID = null;
this.note = null;
this.attachments = null;
}
c.$dwrClassName = 'MF_ItemNoteAndAttachmentWrapper';
c.$dwrClassMembers = {};
c.$dwrClassMembers.itemID = {};
c.$dwrClassMembers.note = {};
c.$dwrClassMembers.attachments = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ItemNoteAndAttachmentWrapper", c);
dwr.engine._mappedClasses["MF_ItemNoteAndAttachmentWrapper"] = c;
addedNow["MF_ItemNoteAndAttachmentWrapper"] = true;
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

if (!dwr.engine._mappedClasses["MF_Feedback"]) {
c = function() {
this.creator = null;
this.pos = null;
this.attached = null;
this.creatorName = null;
this.boardid = null;
this.comment = null;
this.id = null;
this.message = null;
this.reply = null;
this.projectid = null;
this.varid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_Feedback';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.pos = {};
c.$dwrClassMembers.attached = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.boardid = {};
c.$dwrClassMembers.comment = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.message = {};
c.$dwrClassMembers.reply = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.varid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Feedback", c);
dwr.engine._mappedClasses["MF_Feedback"] = c;
addedNow["MF_Feedback"] = true;
}
})();

(function() {
if (dwr.engine._getObject("MF_LogManager") == undefined) {
var p;

p = {};






p.countLog = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_LogManager', 'countLog', arguments);
};






p.deleteLog = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_LogManager', 'deleteLog', arguments);
};







p.sendCommentNotification = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_LogManager', 'sendCommentNotification', arguments);
};







p.logReadonlyProject = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_LogManager', 'logReadonlyProject', arguments);
};












p.sendNotification = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
return dwr.engine._execute(p._path, 'MF_LogManager', 'sendNotification', arguments);
};











p.sendNotification = function(p0, p1, p2, p3, p4, p5, p6, callback) {
return dwr.engine._execute(p._path, 'MF_LogManager', 'sendNotification', arguments);
};







p.add = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_LogManager', 'add', arguments);
};






p.list = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_LogManager', 'list', arguments);
};

dwr.engine._setObject("MF_LogManager", p);
}
})();

