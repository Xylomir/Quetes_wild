if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
var c;
var addedNow = [];

if (!dwr.engine._mappedClasses["MF_Board"]) {
c = function() {
this.approvedVariation = null;
this.approver = null;
this.clientid = null;
this.name = null;
this.sortDate = 0;
this.id = null;
this.type = null;
this.projectId = null;
this.variationList = null;
}
c.$dwrClassName = 'MF_Board';
c.$dwrClassMembers = {};
c.$dwrClassMembers.approvedVariation = {};
c.$dwrClassMembers.approver = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.sortDate = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.projectId = {};
c.$dwrClassMembers.variationList = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Board", c);
dwr.engine._mappedClasses["MF_Board"] = c;
addedNow["MF_Board"] = true;
}

if (!dwr.engine._mappedClasses["MF_Variation"]) {
c = function() {
this.variationLabel = null;
this.creator = null;
this.clientid = null;
this.comments = 0;
this.rating = 0;
this.description = null;
this.ratingCount = 0;
this.type = null;
this.varid = 0;
this.size = null;
this.name = null;
this.width = 0;
this.id = null;
this.projectid = null;
this.createDate = null;
this.height = 0;
}
c.$dwrClassName = 'MF_Variation';
c.$dwrClassMembers = {};
c.$dwrClassMembers.variationLabel = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.comments = {};
c.$dwrClassMembers.rating = {};
c.$dwrClassMembers.description = {};
c.$dwrClassMembers.ratingCount = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.varid = {};
c.$dwrClassMembers.size = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.width = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.height = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Variation", c);
dwr.engine._mappedClasses["MF_Variation"] = c;
addedNow["MF_Variation"] = true;
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
this.awaitingApprovalProjectsCount = 0;
this.projects = null;
this.totalProjectsCount = 0;
this.readonlyProjectsCount = 0;
this.sentForApprovalProjectsCount = 0;
this.approvedProjectsCount = 0;
this.trashProjectsCount = 0;
this.sharedProjectsCount = 0;
this.logshared = null;
this.labels = null;
this.publicProjectsCount = 0;
}
c.$dwrClassName = 'MF_DashboardData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.ownedProjectsCount = {};
c.$dwrClassMembers.awaitingApprovalProjectsCount = {};
c.$dwrClassMembers.projects = {};
c.$dwrClassMembers.totalProjectsCount = {};
c.$dwrClassMembers.readonlyProjectsCount = {};
c.$dwrClassMembers.sentForApprovalProjectsCount = {};
c.$dwrClassMembers.approvedProjectsCount = {};
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

if (!dwr.engine._mappedClasses["MF_SharePerm"]) {
c = function() {
this.canUploadImage = null;
this.canViewMembers = null;
this.canDeleteImage = null;
this.canCreateBoard = null;
this.canDeleteBoard = null;
this.canEditBoard = null;
this.canRateDesign = null;
this.canViewLog = null;
}
c.$dwrClassName = 'MF_SharePerm';
c.$dwrClassMembers = {};
c.$dwrClassMembers.canUploadImage = {};
c.$dwrClassMembers.canViewMembers = {};
c.$dwrClassMembers.canDeleteImage = {};
c.$dwrClassMembers.canCreateBoard = {};
c.$dwrClassMembers.canDeleteBoard = {};
c.$dwrClassMembers.canEditBoard = {};
c.$dwrClassMembers.canRateDesign = {};
c.$dwrClassMembers.canViewLog = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SharePerm", c);
dwr.engine._mappedClasses["MF_SharePerm"] = c;
addedNow["MF_SharePerm"] = true;
}

if (!dwr.engine._mappedClasses["MF_Project"]) {
c = function() {
this.approvedVariation = null;
this.awaitingApproval = null;
this.updateDate = null;
this.sentForApproval = null;
this.boards = 0;
this.stamp = null;
this.title = null;
this.isdeleted = null;
this.sharedClient = null;
this.checkPermission = null;
this.permitted = null;
this.readonly = null;
this.variations = 0;
this.members = 0;
this.shareDisabled = null;
this.collaborators = null;
this.company = null;
this.share = null;
this.id = null;
this.sharePerm = null;
this.createDate = null;
this.isBasic = null;
this.permissionType = null;
this.creator = null;
this.realtime = null;
this.comments = 0;
this.deletedon = null;
this.revision = null;
this.publicURL = null;
this.approvedProject = null;
this.approveCount = 0;
}
c.$dwrClassName = 'MF_Project';
c.$dwrClassMembers = {};
c.$dwrClassMembers.approvedVariation = {};
c.$dwrClassMembers.awaitingApproval = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.sentForApproval = {};
c.$dwrClassMembers.boards = {};
c.$dwrClassMembers.stamp = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.isdeleted = {};
c.$dwrClassMembers.sharedClient = {};
c.$dwrClassMembers.checkPermission = {};
c.$dwrClassMembers.permitted = {};
c.$dwrClassMembers.readonly = {};
c.$dwrClassMembers.variations = {};
c.$dwrClassMembers.members = {};
c.$dwrClassMembers.shareDisabled = {};
c.$dwrClassMembers.collaborators = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.share = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.sharePerm = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.isBasic = {};
c.$dwrClassMembers.permissionType = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.realtime = {};
c.$dwrClassMembers.comments = {};
c.$dwrClassMembers.deletedon = {};
c.$dwrClassMembers.revision = {};
c.$dwrClassMembers.publicURL = {};
c.$dwrClassMembers.approvedProject = {};
c.$dwrClassMembers.approveCount = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Project", c);
dwr.engine._mappedClasses["MF_Project"] = c;
addedNow["MF_Project"] = true;
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

if (!dwr.engine._mappedClasses["MF_ImgVariation"]) {
c = function() {
this.variationLabel = null;
this.creator = null;
this.clientid = null;
this.comments = 0;
this.rating = 0;
this.description = null;
this.sortDate = 0;
this.ratingCount = 0;
this.type = null;
this.isUnread = null;
this.varid = 0;
this.size = null;
this.name = null;
this.width = 0;
this.boardid = null;
this.id = null;
this.projectid = null;
this.createDate = null;
this.height = 0;
}
c.$dwrClassName = 'MF_ImgVariation';
c.$dwrClassMembers = {};
c.$dwrClassMembers.variationLabel = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.comments = {};
c.$dwrClassMembers.rating = {};
c.$dwrClassMembers.description = {};
c.$dwrClassMembers.sortDate = {};
c.$dwrClassMembers.ratingCount = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.isUnread = {};
c.$dwrClassMembers.varid = {};
c.$dwrClassMembers.size = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.width = {};
c.$dwrClassMembers.boardid = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.height = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ImgVariation", c);
dwr.engine._mappedClasses["MF_ImgVariation"] = c;
addedNow["MF_ImgVariation"] = true;
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

if (!dwr.engine._mappedClasses["MF_Activity"]) {
c = function() {
this.creator = null;
this.clientid = null;
this.attached = null;
this.creatorName = null;
this.boardid = null;
this.comment = null;
this.id = null;
this.message = null;
this.type = null;
this.projectid = null;
this.varid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_Activity';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.attached = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.boardid = {};
c.$dwrClassMembers.comment = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.message = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.varid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Activity", c);
dwr.engine._mappedClasses["MF_Activity"] = c;
addedNow["MF_Activity"] = true;
}
})();

(function() {
if (dwr.engine._getObject("MF_Authentication") == undefined) {
var p;

p = {};






p.checkProjectPermission = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'checkProjectPermission', arguments);
};






p.checkUser = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'checkUser', arguments);
};







p.checkUser = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'checkUser', arguments);
};






p.daysBetween = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'daysBetween', arguments);
};





p.IsWireframeProPremiumLicense = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'IsWireframeProPremiumLicense', arguments);
};







p.addSecureKeyHash = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'addSecureKeyHash', arguments);
};







p.addFirstSecureKeyHash = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'addFirstSecureKeyHash', arguments);
};







p.addSecureKeyHashSwitchApp = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'addSecureKeyHashSwitchApp', arguments);
};








p.changePassword = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'changePassword', arguments);
};






p.checkSecureKeyHashFast = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_Authentication', 'checkSecureKeyHashFast', arguments);
};

dwr.engine._setObject("MF_Authentication", p);
}
})();

