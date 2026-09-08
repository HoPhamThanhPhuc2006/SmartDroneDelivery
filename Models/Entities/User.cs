using System.ComponentModel.DataAnnotations;

namespace SmartDroneDelivery.API.Models.Entities
{
    public class User
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        [Required, MaxLength(100)]
        public string Username { get; set; } = string.Empty;
        
        [Required]
        public string PasswordHash { get; set; } = string.Empty;
        
        [Required, MaxLength(100)]
        public string FullName { get; set; } = string.Empty;
        
        [EmailAddress, MaxLength(100)]
        public string Email { get; set; } = string.Empty;
        
        [Phone, MaxLength(20)]
        public string PhoneNumber { get; set; } = string.Empty;
        
        public UserRole Role { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
