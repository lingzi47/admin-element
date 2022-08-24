import store from "@/store";
/**
 * 检查按钮操作权限
 * @param {Array/String} value 
 * @returns {boolean}
 */
export function checkPermission(value) {
  const permissions = store.getters.permissions;
  if (value) {
    if (typeof value === "string" || value instanceof String) {
      if (permissions.indexOf(value) != -1) return true;
    } else if (value instanceof Array && value.length > 0) {
      const permissionPermissions = value;
      return permissions.some((role) => {
        return permissionPermissions.includes(role);
      });
    }
  }
  return false
}