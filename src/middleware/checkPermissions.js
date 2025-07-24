export async function checkPermissions(permissionName) {
  return (req, res, next) => {
    const userPermissions = req.user.permissions; //fetched on login
    if (!userPermissions.includes(permissionName)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
}
