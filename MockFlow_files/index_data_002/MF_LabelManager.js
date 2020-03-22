if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
var c;
var addedNow = [];

if (!dwr.engine._mappedClasses["MF_Node_data"]) {
c = function() {
this.updateDate = null;
this.clientid = null;
this.comments = null;
this.notes = null;
this.updatedby = null;
this.nodeFiles = null;
this.nodeid = null;
this.projectid = null;
}
c.$dwrClassName = 'MF_Node_data';
c.$dwrClassMembers = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.comments = {};
c.$dwrClassMembers.notes = {};
c.$dwrClassMembers.updatedby = {};
c.$dwrClassMembers.nodeFiles = {};
c.$dwrClassMembers.nodeid = {};
c.$dwrClassMembers.projectid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Node_data", c);
dwr.engine._mappedClasses["MF_Node_data"] = c;
addedNow["MF_Node_data"] = true;
}

if (!dwr.engine._mappedClasses["MF_User"]) {
c = function() {
this.lastLogin = null;
this.lastName = null;
this.isNewLicense = null;
this.companyName = null;
this.pid = null;
this.storage = null;
this.isTrial = null;
this.type = null;
this.emailAlert = null;
this.password = null;
this.tokenKey = null;
this.company = null;
this.daysLeft = 0;
this.teamPremium = null;
this.createDate = null;
this.isBasic = null;
this.accountType = null;
this.projectsLeft = 0;
this.teamLicenseOwner = null;
this.plusEdition = null;
this.firstName = null;
this.jwtToken = null;
this.hadTrial = null;
this.teamEditor = null;
this.username = null;
}
c.$dwrClassName = 'MF_User';
c.$dwrClassMembers = {};
c.$dwrClassMembers.lastLogin = {};
c.$dwrClassMembers.lastName = {};
c.$dwrClassMembers.isNewLicense = {};
c.$dwrClassMembers.companyName = {};
c.$dwrClassMembers.pid = {};
c.$dwrClassMembers.storage = {};
c.$dwrClassMembers.isTrial = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.emailAlert = {};
c.$dwrClassMembers.password = {};
c.$dwrClassMembers.tokenKey = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.daysLeft = {};
c.$dwrClassMembers.teamPremium = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.isBasic = {};
c.$dwrClassMembers.accountType = {};
c.$dwrClassMembers.projectsLeft = {};
c.$dwrClassMembers.teamLicenseOwner = {};
c.$dwrClassMembers.plusEdition = {};
c.$dwrClassMembers.firstName = {};
c.$dwrClassMembers.jwtToken = {};
c.$dwrClassMembers.hadTrial = {};
c.$dwrClassMembers.teamEditor = {};
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

if (!dwr.engine._mappedClasses["MF_NodeFile"]) {
c = function() {
this.ext = null;
this.thumbnail = null;
this.clientid = null;
this.filename = null;
this.size = null;
this.width = 0;
this.id = null;
this.nodeid = null;
this.projectid = null;
this.createDate = null;
this.height = 0;
}
c.$dwrClassName = 'MF_NodeFile';
c.$dwrClassMembers = {};
c.$dwrClassMembers.ext = {};
c.$dwrClassMembers.thumbnail = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.filename = {};
c.$dwrClassMembers.size = {};
c.$dwrClassMembers.width = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.nodeid = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.height = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_NodeFile", c);
dwr.engine._mappedClasses["MF_NodeFile"] = c;
addedNow["MF_NodeFile"] = true;
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

if (!dwr.engine._mappedClasses["MF_NodeEventIcon"]) {
c = function() {
this.creator = null;
this.clientId = null;
this.name = null;
this.width = null;
this.id = null;
this.projectId = null;
this.height = null;
}
c.$dwrClassName = 'MF_NodeEventIcon';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientId = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.width = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectId = {};
c.$dwrClassMembers.height = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_NodeEventIcon", c);
dwr.engine._mappedClasses["MF_NodeEventIcon"] = c;
addedNow["MF_NodeEventIcon"] = true;
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

if (!dwr.engine._mappedClasses["MF_Revision"]) {
c = function() {
this.note = null;
this.auto = null;
this.creator = null;
this.data = null;
this.company = null;
this.id = null;
this.recovery = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_Revision';
c.$dwrClassMembers = {};
c.$dwrClassMembers.note = {};
c.$dwrClassMembers.auto = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.data = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.recovery = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Revision", c);
dwr.engine._mappedClasses["MF_Revision"] = c;
addedNow["MF_Revision"] = true;
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

if (!dwr.engine._mappedClasses["MF_SharePerm"]) {
c = function() {
this.canDeleteNode = null;
this.canViewMembers = null;
this.canChangeTheme = null;
this.canAddNode = null;
this.canDragDropNode = null;
this.canViewLog = null;
}
c.$dwrClassName = 'MF_SharePerm';
c.$dwrClassMembers = {};
c.$dwrClassMembers.canDeleteNode = {};
c.$dwrClassMembers.canViewMembers = {};
c.$dwrClassMembers.canChangeTheme = {};
c.$dwrClassMembers.canAddNode = {};
c.$dwrClassMembers.canDragDropNode = {};
c.$dwrClassMembers.canViewLog = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SharePerm", c);
dwr.engine._mappedClasses["MF_SharePerm"] = c;
addedNow["MF_SharePerm"] = true;
}

if (!dwr.engine._mappedClasses["MF_Project"]) {
c = function() {
this.compressedData = [];
this.updateDate = null;
this.data = null;
this.stamp = null;
this.title = null;
this.isdeleted = null;
this.sharedClient = null;
this.checkPermission = null;
this.permitted = null;
this.readonly = null;
this.members = 0;
this.shareDisabled = null;
this.collaborators = null;
this.company = null;
this.share = null;
this.theme = null;
this.id = null;
this.sharePerm = null;
this.createDate = null;
this.isBasic = null;
this.permissionType = null;
this.creator = null;
this.realtime = null;
this.comments = 0;
this.notificationCount = 0;
this.deletedon = null;
this.revision = null;
this.publicURL = null;
}
c.$dwrClassName = 'MF_Project';
c.$dwrClassMembers = {};
c.$dwrClassMembers.compressedData = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.data = {};
c.$dwrClassMembers.stamp = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.isdeleted = {};
c.$dwrClassMembers.sharedClient = {};
c.$dwrClassMembers.checkPermission = {};
c.$dwrClassMembers.permitted = {};
c.$dwrClassMembers.readonly = {};
c.$dwrClassMembers.members = {};
c.$dwrClassMembers.shareDisabled = {};
c.$dwrClassMembers.collaborators = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.share = {};
c.$dwrClassMembers.theme = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.sharePerm = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.isBasic = {};
c.$dwrClassMembers.permissionType = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.realtime = {};
c.$dwrClassMembers.comments = {};
c.$dwrClassMembers.notificationCount = {};
c.$dwrClassMembers.deletedon = {};
c.$dwrClassMembers.revision = {};
c.$dwrClassMembers.publicURL = {};
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

if (!dwr.engine._mappedClasses["MF_SiteMapLog"]) {
c = function() {
this.creator = null;
this.clientid = null;
this.log = null;
this.subtype = null;
this.creatorName = null;
this.id = null;
this.type = null;
this.nodeid = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_SiteMapLog';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.log = {};
c.$dwrClassMembers.subtype = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.nodeid = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SiteMapLog", c);
dwr.engine._mappedClasses["MF_SiteMapLog"] = c;
addedNow["MF_SiteMapLog"] = true;
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

if (!dwr.engine._mappedClasses["MF_ExportNode"]) {
c = function() {
this.icon = null;
this.name = null;
this.id = null;
this.parentNode = null;
this.url = null;
this.status = null;
}
c.$dwrClassName = 'MF_ExportNode';
c.$dwrClassMembers = {};
c.$dwrClassMembers.icon = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.parentNode = {};
c.$dwrClassMembers.url = {};
c.$dwrClassMembers.status = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ExportNode", c);
dwr.engine._mappedClasses["MF_ExportNode"] = c;
addedNow["MF_ExportNode"] = true;
}

if (!dwr.engine._mappedClasses["MF_ActivityLog"]) {
c = function() {
this.creator = null;
this.clientid = null;
this.log = null;
this.subtype = null;
this.creatorName = null;
this.id = null;
this.type = null;
this.nodeid = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_ActivityLog';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.log = {};
c.$dwrClassMembers.subtype = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.nodeid = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ActivityLog", c);
dwr.engine._mappedClasses["MF_ActivityLog"] = c;
addedNow["MF_ActivityLog"] = true;
}

if (!dwr.engine._mappedClasses["MF_Feedback"]) {
c = function() {
this.creator = null;
this.attached = null;
this.creatorName = null;
this.comment = null;
this.id = null;
this.message = null;
this.reply = null;
this.nodeid = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_Feedback';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.attached = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.comment = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.message = {};
c.$dwrClassMembers.reply = {};
c.$dwrClassMembers.nodeid = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Feedback", c);
dwr.engine._mappedClasses["MF_Feedback"] = c;
addedNow["MF_Feedback"] = true;
}
})();

(function() {
if (dwr.engine._getObject("MF_LabelManager") == undefined) {
var p;

p = {};





p.updateLabels = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_LabelManager', 'updateLabels', arguments);
};





p.deleteLabel = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_LabelManager', 'deleteLabel', arguments);
};






p.removeProject = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_LabelManager', 'removeProject', arguments);
};





p.add = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_LabelManager', 'add', arguments);
};





p.update = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_LabelManager', 'update', arguments);
};





p.list = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_LabelManager', 'list', arguments);
};

dwr.engine._setObject("MF_LabelManager", p);
}
})();

