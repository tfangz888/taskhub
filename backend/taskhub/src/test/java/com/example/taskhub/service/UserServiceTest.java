package com.example.taskhub.service;

import com.example.taskhub.domain.User;
import com.example.taskhub.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    private User user1;
    private User user2;

    @BeforeEach
    void setUp() {
        user1 = new User();
        user1.setUserId(1L);
        user1.setDomainName("user1");

        user2 = new User();
        user2.setUserId(2L);
        user2.setDomainName("user2");
    }

    @Test
    void testFindAll() {
        when(userRepository.findAll()).thenReturn(Arrays.asList(user1, user2));

        List<User> users = userService.findAll();

        assertEquals(2, users.size());
    }

    @Test
    void testFindById() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user1));

        User user = userService.findById(1L);

        assertNotNull(user);
        assertEquals("user1", user.getDomainName());
    }

    @Test
    void testSave() {
        when(userRepository.save(user1)).thenReturn(user1);

        User savedUser = userService.save(user1);

        assertNotNull(savedUser);
        assertEquals("user1", savedUser.getDomainName());
    }
}
